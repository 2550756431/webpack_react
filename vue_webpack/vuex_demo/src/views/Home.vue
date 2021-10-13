<template>
  <div id="pdfDom">
    <button @click="downloadPdf">daochu</button>
    <div>
      {{ a }}
      <MyButton :getinfo="add" />
      <!-- :data.prop="inputData"  作为一个 DOM property 绑定而不是作为 attribute 绑定 -->

      <input id="input" type="foo" value="11" :data.prop="inputData" />
      <!-- <HelloWorld msg="helle world">
           <span class="fa fa-user"></span>
  Your Profile
        </HelloWorld> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MyButton from "@/components/MyButton.vue";
import { mapActions, mapState } from "vuex";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
export default {
  name: "Home",
  components: {
    HelloWorld,
    MyButton,
  },
  data() {
    return {
      a: 1,
      inputData: "inputData",
    };
  },
  computed: {
    ...mapState("account", {
      account: (state) => {
        return state.name;
      },
    }),
    // ...mapState({
    //   registerModule: (state) => {
    //     return state.myModule.name;
    //   },
    // }),
    ...mapState("account", {
      myPage: (state) => {
        return state.myPage.name;
      },
    }),
    ...mapState("account/posts", {
      posts: (state) => {
        return state.name;
      },
    }),
    inputListeners: function () {
      console.log(222222);
      return {
        a1: this.a * 2,
        name: "zhang",
      };
    },
  },
  methods: {
    ...mapActions(["account/login"]),
    add: function (params) {
      this.a++;
    },
    downloadPdf() {
      let pdfDom = document.querySelectorAll("#pdfDom")[0];
      html2canvas(pdfDom, {}).then((canvas) => {
        let pageData = canvas.toDataURL("image/jpeg", 1.0);

        // 595 × 842
        let a4Width = 595;
        let a4Height = 842;
        let contenWidth = canvas.width;
        let contentHeight = canvas.height;
        let pageHeight = contenWidth * (a4Height / a4Width);
        let imgWidth = a4Width;
        let imgHeight = parseInt(a4Width * (contentHeight / contenWidth));
        // Default export is a4 paper, portrait, using millimeters for units
        const doc = new jsPDF({
          orientation: "p",
          unit: "px",
          format: "a4",
          putOnlyUsedFonts: true,
          floatPrecision: 16, // or "smart", default is 16
        });
        if (pageHeight > contentHeight) {
          doc.addImage(pageData, "JPEG", 0, 0,  , imgHeight);
        } else {
          let restPageHeight = contentHeight;
          let yPosition = 0
            while(restPageHeight>0){
              restPageHeight-=pageHeight;
              yPosition-=a4Height;
              doc.addImage(pageData, "JPEG", 0, yPosition, imgWidth, a4Height);
              if(restPageHeight>0){
                doc.addPage()
              }
            }
        }
        doc.save("a4.pdf");
      });
    },
  },
  mounted() {
    let iput = document.getElementsByTagName("input")[0];
  },
};

///store.registerModule(['nested', 'myModule'], { })  //之后就可以通过 store.state.myModule 和 store.state.nested.myModule 访问模块的状态。
</script>

// properties  && attribute 区别 Attribute 对象包含   标签  里定义的所有属性，Property 只包含 HTML 标准的属性，不包含自定义属性（eg: data-xxx）
