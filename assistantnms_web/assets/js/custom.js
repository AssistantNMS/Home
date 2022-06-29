function customOnLoad() {
    try {
        var s = skrollr.init();
    } catch { }
    try {
        initTestimonials();
    } catch { }

    const bodyElem = document.getElementById('app-body');
    bodyElem?.classList?.remove?.('is-loading');
}

setTimeout(() => {
    customOnLoad();
}, 1000);
