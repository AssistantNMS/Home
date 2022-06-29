function heroParallax() {
    var heroParallaxElems = document.getElementsByClassName('hero-parallax');
    var heroParallaxInstances = [];
    for (const heroParallaxElem of heroParallaxElems) {
        heroParallaxInstances.push(new Parallax(heroParallaxElem));
    }
}

function customOnLoad() {
    try {
        var s = skrollr.init();
        heroParallax();
    } catch { }

    try {
        initTestimonials();
    } catch { }

    const bodyElem = document.getElementById('app-body');
    bodyElem?.classList?.remove?.('is-loading');
}

setTimeout(() => {
    customOnLoad?.();
}, 1000);
