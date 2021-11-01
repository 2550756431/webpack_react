<template>
  <div class="container">
    <div id="pdfDom">
      <button @click="downloadPdf">downloadPdf</button>
      <button @click="downloadWord">downloadWord</button>
      <button @click="downloadTxt">downloadTxtdownloadTxt</button>
      <div id="wordDom">
        <div class="imgBox">
          <img src="../images/1.jpg" alt="" />
          <img src="../images/2.jpg" alt="" />
          <img src="../images/3.jpg" alt="" />
          <img src="../images/4.jpg" alt="" />
        </div>
        <div class="contentBox txtDom">
          <h1>helle wordDom</h1>
          <p>
            :data.prop="inputData"作为一个 DOM property 绑定而不是作为 attribute
            绑定
          </p>
<a href="/home/yours"></a>
        </div>
      </div>

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
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MyButton from "@/components/MyButton.vue";
import { mapActions, mapState } from "vuex";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import txtExport from "./extends/extendTxt.js";
import wordExport from "./extends/extendsWord.js";
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
      let contenWidth = pdfDom.offsetWidth;
      let contentHeight = pdfDom.offsetHeight;

      let createCanvas = document.createElement("canvas");
      var createScale = 1;
      createCanvas.width = contenWidth * createScale;
      createCanvas.height = contentHeight * createScale;
      createCanvas.style.width = contenWidth * createScale + "px";
      createCanvas.style.height = contentHeight * createScale + "px";
      createCanvas.getContext("2d").scale(createScale, createScale);
      let options = {
        canvas: createCanvas,
        scale: createScale,
        with: contenWidth,
        height: contentHeight,
        useCors: true,
        dpi: window.devicePixelRatio * createScale,
      };
      html2canvas(pdfDom, options).then((canvas) => {
        let newContext = canvas.getContext("2d");
        // imageSmoothingEnabled  图片平滑 及 兼容;
        // newContext.scale(0.5, 0.5);
        newContext.mozImageSmoothingEnabled = true;
        newContext.webkitImageSmoothingEnabled = true;
        newContext.msImageSmoothingEnabled = true;
        newContext.imageSmoothingEnabled = true;
        newContext.imageSmoothingQuality = "high";
        let pageData = canvas.toDataURL("image/png", 1);

        // 595 × 842
        let a4Width = 595.28;
        let a4Height = 841.89;

        let pageHeight = contenWidth * (a4Height / a4Width);
        let imgWidth = a4Width;

        let restPageHeight = contentHeight;

        let imgHeight = a4Width * (contentHeight / contenWidth);
        // Default export is a4 paper, portrait, using millimeters for units
        const doc = new jsPDF({
          orientation: "p",
          format: "a4",
          unit: "pt",
        });
        if (pageHeight > contentHeight) {
          doc.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
        } else {
          let yPosition = 0;
          while (restPageHeight > 0) {
            restPageHeight -= pageHeight;
            yPosition -= a4Height;
            doc.addImage(pageData, "JPEG", 0, yPosition, imgWidth, imgHeight);
            if (restPageHeight > 0) {
              doc.addPage();
            }
          }
        }
        doc.save("a4.pdf");
      });
    },
    downloadWord() {
      let wordDom = document.querySelectorAll("#wordDom")[0];
      console.log(wordDom, "worddom");
      wordExport("word", wordDom);
    },
     downloadTxt() {
      let wordDom = document.querySelectorAll(".txtDom")[0];
      txtExport("word", wordDom);
    },
  },
  mounted() {
    let iput = document.getElementsByTagName("input")[0];
    console.log(wordExport, "wordExportwordExport");
    // extendWord()
  },
};

///store.registerModule(['nested', 'myModule'], { })  //之后就可以通过 store.state.myModule 和 store.state.nested.myModule 访问模块的状态。
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  display: flex;
  justify-items: center;
}
#pdfDom {
  width: 600px;
  height: 250px;
}

.imgBox {
  display: flex;
}
img {
  display: block;
  width: 50px;
  height: 50px;
}
</style>

// properties  && attribute 区别 Attribute 对象包含   标签  里定义的所有属性，Property 只包含 HTML 标准的属性，不包含自定义属性（eg: data-xxx）
