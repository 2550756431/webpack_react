function downloadPdf() {
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
}