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
var home_slider_1 = require('./home.slider');
var home_pipeline_1 = require("./home.pipeline");
var home_history_1 = require("./home.history");
var home_ourStaff_1 = require("./home.ourStaff");
var home_certifications_1 = require("./home.certifications");
var Home = (function () {
    function Home() {
    }
    Home = __decorate([
        core_1.Component({
            selector: 'home-core',
            template: "\n    <main>\n        <home-slider></home-slider>\n        <home-pipeline></home-pipeline>\n        <home-certifications></home-certifications>\n        <home-our-staff></home-our-staff>\n        <home-history></home-history>\n    </main>\n    ",
            directives: [home_slider_1.HomeSlider, home_pipeline_1.HomePipeline, home_certifications_1.HomeCertifications, home_ourStaff_1.HomeOurStaff, home_history_1.HomeHistory]
        }), 
        __metadata('design:paramtypes', [])
    ], Home);
    return Home;
})();
exports.Home = Home;
//# sourceMappingURL=home.core.js.map