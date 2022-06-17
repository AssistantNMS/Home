
window.onload = function () {
    parallax();
};

function parallax() {
    var s = skrollr.init();

    var scene1 = document.getElementById('hero-parallax-scene1');
    var parallaxInstance1 = new Parallax(scene1, {
        relativeInput: true
    });

    var scene2 = document.getElementById('hero-parallax-scene2');
    var parallaxInstance2 = new Parallax(scene2);

    var sceneMaster = document.getElementById('hero-parallax-scene3');
    var parallaxInstanceMaster = new Parallax(sceneMaster);
}