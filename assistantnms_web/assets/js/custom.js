function heroParallax() {
    const heroParallaxElems = document.getElementsByClassName('hero-parallax');
    const heroParallaxInstances = [];
    for (const heroParallaxElem of heroParallaxElems) {
        heroParallaxInstances.push(new Parallax(heroParallaxElem));
    }
}

function customOnLoad() {
    try {
        var s = skrollr.init(); // global skrollr instance
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

