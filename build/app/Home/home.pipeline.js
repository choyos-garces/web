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
var PipeItem_1 = require("./Interface/PipeItem");
var HomePipeline = (function () {
    function HomePipeline() {
        this.messages = [];
        var image = "bananas.jpg";
        var title = "Outstanding Quality";
        var message = "Rest assured that the highest international quality standards are maintained in all our plantations. From the time of plantation, harvesting and finally the packaging, our team takes care that the product is of the highest quality.";
        this.messages.push(new PipeItem_1.PipeItem(title, message, image));
        var image = "parqueadero.jpg";
        var title = "Plenty of Experience";
        var message = "With more than three generations of experience in the care and maintenance of bananas farms, we can guarantee that our product is the best. Time has taught us to reap great benefit and with minimum impact within our plantations.";
        this.messages.push(new PipeItem_1.PipeItem(title, message, image));
        var image = "hoja.jpg";
        var title = "Our Compromise";
        var message = "Our level of compromise starts from our farms, on each box and every container. For us communication is key with our employees, providers and clients. Our goal is to provide an outstanding product that will exceed our customer's expectations.";
        this.messages.push(new PipeItem_1.PipeItem(title, message, image));
    }
    HomePipeline = __decorate([
        core_1.Component({
            selector: 'home-pipeline',
            template: "\n    <div id=\"pipeline\" class=\"container\">\n        <div class=\"text-center\">\n            <h1>Only the very best</h1>\n        </div>\n        <div class=\"col-md-4\" *ngFor=\"#item of messages\">\n            <div class=\"item\">\n                <div class=\"item-image\">\n                    <img src=\"{{ item.image }}\">\n                </div>\n                <div class=\"item-content\">\n                    <h3>{{ item.title }}</h3>\n                    <p>\n                        {{ item.message }}\n                    </p>\n                </div>\n            </div>\n        </div>\n        <div class=\"read-more\">\n            <a href=\"#\">Read More <i class=\"fa fa-long-arrow-right\"></i></a>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], HomePipeline);
    return HomePipeline;
})();
exports.HomePipeline = HomePipeline;
