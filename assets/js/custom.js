
window.onload = function () {
    parallax();
};

function parallax() {
    var s = skrollr.init();

    heroParallax();
    featureParallax();
}

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