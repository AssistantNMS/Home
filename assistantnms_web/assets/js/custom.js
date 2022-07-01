function heroParallax() {
    const heroParallaxElems = document.getElementsByClassName('hero-parallax');
    const heroParallaxInstances = [];
    for (const heroParallaxElem of heroParallaxElems) {
        heroParallaxInstances.push(new Parallax(heroParallaxElem));
    }
}

function featureParallax() {
    var featureParallaxElems = document.getElementsByClassName('feature-parallax');
    var featureParallaxInstances = [];
    for (const featureParallaxElem of featureParallaxElems) {
        featureParallaxInstances.push(new Parallax(featureParallaxElem));
    }
}

function customOnLoad() {
    try {
        if ((screen?.width ?? 0) > 1000) {
            var s = skrollr.init(); // global skrollr instance
            heroParallax();
            featureParallax();
        }
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

