
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

function toggleNavBarDropdownWindow(linkElem, idSelector) {
    const classToUse = 'open';
    const navElem = document.getElementById(idSelector);
    const navOverlayElem = document.getElementById('mega-menu-container-overlay');

    if (linkElem.classList.contains(classToUse)) {
        closeNavBarWindows();
    } else {
        linkElem.classList.add(classToUse);
        navElem.classList.add(classToUse);
        navOverlayElem.classList.add(classToUse);
    }
}

function closeNavBarWindows() {
    const classToUse = 'open';

    const dropDownElems = document.getElementsByClassName('dropdown-openable');
    for (const dropDownElem of dropDownElems) {
        dropDownElem.classList.remove(classToUse);
    }
}