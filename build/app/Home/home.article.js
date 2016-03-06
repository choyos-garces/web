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
var HomeArticle = (function () {
    function HomeArticle() {
        this.title = "Three Generations and counting.";
        this.body = "With more than three generations of experience in the care and maintenance of bananas farms, we can guarantee that our product is simply the best. Rest assured that the highest international quality standards are maintained in all our farms. From the time of plantation, harvesting and finally the packaging, team of qualified experts make sure the product is of the highest quality.";
    }
    HomeArticle = __decorate([
        core_1.Component({
            selector: 'home-article',
            template: "\n    <div id=\"article\" class=\"section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-2 visible-md-block visible-lg-block\">\n                    <div class=\"text-center\">\n                        <img src=\"img/sticker-organic-medium.svg\" />\n                    </div>\n                </div>\n                <div class=\"col-md-4 col-md-push-4\">\n                    <div id=\"article-carousel\">\n                        <div id=\"article-carousel-fix\" class=\"text-center\">\n                            <img src=\"img/history/freddy.jpg\"/>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4 col-md-pull-4\">\n                    <h1>{{ title }}</h1>\n                    <p class=\"context\">{{ body }}</p>\n                </div>\n                <div class=\"col-md-2\">\n                </div>\n            </div>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], HomeArticle);
    return HomeArticle;
})();
exports.HomeArticle = HomeArticle;
