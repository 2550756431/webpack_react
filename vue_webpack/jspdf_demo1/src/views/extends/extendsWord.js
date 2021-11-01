import { saveAs } from 'file-saver';
import styles from "./style"
const wordExport = function(fileName, extendDom) {

    var _static = {
        mhtml: {
            top: "Mime-Version: 1.0\nContent-Base: " + location.href + "\nContent-Type: Multipart/related; boundary=\"NEXT.ITEM-BOUNDARY\";type=\"text/html\"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset=\"utf-8\"\nContent-Location: " + location.href + "\n\n<!DOCTYPE html>\n<html>\n_html_</html>",
            head: "<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n<style>\n_styles_\n</style>\n</head>\n",
            body: "<body>_body_</body>" 
        }
    };
    var options = {
        maxWidth: 624
    };
    // Clone selected element before manipulating it;
    
    var markup = extendDom;

    // Embed all images using Data URLs
    var images = Array();
    var img = markup.getElementsByTagName('img');
    for (var i = 0; i < img.length; i++) {
        // Calculate dimensions of output image
        var w = Math.min(img[i].width, options.maxWidth);
        var h = img[i].height * (w / img[i].width);
        // Create canvas for converting image to data URL
        var canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        // Draw image to canvas
        var context = canvas.getContext('2d');
        context.drawImage(img[i], 0, 0, w, h);
        // Get data URL encoding of image
        var uri = canvas.toDataURL("image/png");
        img[i].width = w;
        img[i].height = h;
        // Save encoded image to array
        images[i] = {
            type: uri.substring(uri.indexOf(":") + 1, uri.indexOf(";")),
            encoding: uri.substring(uri.indexOf(";") + 1, uri.indexOf(",")),
            location: img[i].getAttribute("src"),
            data: uri.substring(uri.indexOf(",") + 1)
        };

    }
console.log(images)

    // Prepare bottom of mhtml file with image data
    var mhtmlBottom = "\n";
    for (var i = 0; i < images.length; i++) {
        mhtmlBottom += "--NEXT.ITEM-BOUNDARY\n";
        mhtmlBottom += "Content-Location: " + images[i].location + "\n";
        mhtmlBottom += "Content-Type: " + images[i].type + "\n";
        mhtmlBottom += "Content-Transfer-Encoding: " + images[i].encoding + "\n\n";
        mhtmlBottom += images[i].data + "\n\n";
    }
    mhtmlBottom += "--NEXT.ITEM-BOUNDARY--";

    //TODO: load css from included stylesheet
 

    // Aggregate parts of the file together
    var fileContent = _static.mhtml.top.replace("_html_", _static.mhtml.head.replace("_styles_", styles) + _static.mhtml.body.replace("_body_", markup.innerHTML)) + mhtmlBottom;
console.log(JSON.stringify(fileContent));
    // Create a Blob with the file contents
    var blob = new Blob([fileContent], {
        type: "application/msword;charset=utf-8"
    });
    saveAs(blob, fileName + ".doc");
};

export default wordExport