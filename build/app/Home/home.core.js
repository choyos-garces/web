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
var home_compromise_1 = require("./home.compromise");
var home_article_1 = require("./home.article");
var home_pipeline_1 = require("./home.pipeline");
var home_message_1 = require("./home.message");
var Home = (function () {
    function Home() {
    }
    Home = __decorate([
        core_1.Component({
            selector: 'home-core',
            template: "\n    <main>\n        <home-slider></home-slider>\n        <home-compromise></home-compromise>\n        <home-article></home-article>\n        <home-pipeline></home-pipeline>\n        <home-message></home-message>\n    </main>\n    ",
            directives: [home_slider_1.HomeSlider, home_compromise_1.HomeCompromise, home_article_1.HomeArticle, home_pipeline_1.HomePipeline, home_message_1.HomeMessage]
        }), 
        __metadata('design:paramtypes', [])
    ], Home);
    return Home;
})();
exports.Home = Home;
