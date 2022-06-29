function heroParallax() {
    var heroParallaxElems = document.getElementsByClassName('hero-parallax');
    var heroParallaxInstances = [];
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

function waitForParallax() {
    var bodyElem = document.getElementById('app-body');
    bodyElem.classList.remove('is-loading');
}

window.onload = function () {
    setTimeout(() => {
        parallax();
        initTestimonials();
    }, 500);
};

function parallax() {
    var s = skrollr.init();

    heroParallax();
    featureParallax();

    waitForParallax();
}

setTimeout(() => {
    waitForParallax();
}, 1000);
