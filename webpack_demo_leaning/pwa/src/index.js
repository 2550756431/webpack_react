if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js").then((res) => {
            console.log("sw 注册成功了")
        }).catch((err) => {
            console.log("sw 注册失败了")
        })
    })
}