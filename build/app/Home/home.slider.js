var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var HomeSlider = (function () {
    function HomeSlider() {
        var nav = document.querySelector("nav");
        window.addEventListener("scroll", function () {
            var slider = document.getElementById("slider").offsetHeight - 85;
            if (this.scrollY > slider) {
                nav.classList.add("fixed");
            }
            else
                nav.classList.remove("fixed");
        });
    }
    HomeSlider = __decorate([
        core_1.Component({
            selector: 'home-slider',
            template: "\n    <div id=\"slider\">\n        <div class=\"vignette\"></div>\n        <div class=\"img-wrapper\">\n            <img src=\"img/slider/bananera.jpg\" />\n        </div>\n        <div id=\"welcome-message\" class=\"wrapper\">\n            <div id=\"welcome-message-wrapper\">\n                <div class=\"text-center\">\n                    <img src=\"img/logo-white.svg\">\n                </div>\n                <div class=\"text-center\">\n                    <h1 class=\"foreground\">HoyosGarc&eacute;s</h1>\n                </div>\n                <p class=\"text-center\">\n                    Love life, love Bananas!\n                </p>\n            </div>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], HomeSlider);
    return HomeSlider;
})();
exports.HomeSlider = HomeSlider;
//# sourceMappingURL=home.slider.js.map