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

const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
        try {
            const registration = await navigator.serviceWorker.register('/serviceWorker.js');
            if (registration.installing) {
                console.log('Service worker installing');
            } else if (registration.waiting) {
                console.log('Service worker installed');
            } else if (registration.active) {
                console.log('Service worker active');
            }
        } catch (error) {
            console.error(`Registration failed with ${error}`);
        }
    }
};

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

registerServiceWorker();
