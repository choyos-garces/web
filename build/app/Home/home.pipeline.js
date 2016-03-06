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
var Pipeline_1 = require("./Interface/Pipeline");
var HomePipeline = (function () {
    function HomePipeline() {
        this.messages = [];
        var image = "pipeline_guarantee";
        var title = "Our 100% organic production.";
        var message = "Our flag ship product, verified by numerous certidfications. We can guarantee that quality of our organic bananas is the best in the region. Take some time to read our fruit specifitacions or contact us, you wont regret it.";
        this.messages.push(new Pipeline_1.Pipeline(title, message, image));
        var image = "pipeline_premium";
        var title = "Convencional Premium bananas.";
        var message = "Our convencional bananas providiers go through some rigurous selection process. You can expect similar quality from our organic products at a more affordable prices. Read about our selection process and meet our staff in charge.";
        this.messages.push(new Pipeline_1.Pipeline(title, message, image));
        var image = "pipeline_global";
        var title = "To Europe, Middle East, USA and more.";
        var message = "Hemos exportado a todos estos lugares con excelents resultados. Con nuestra propia marca o como proveedores, nunca hemos tenido algun invonveniente con nuestros cliente. Conoce al equipo responsable de este proceso.";
        this.messages.push(new Pipeline_1.Pipeline(title, message, image));
    }
    HomePipeline = __decorate([
        core_1.Component({
            selector: 'home-pipeline',
            template: "\n    <div id=\"pipeline\" class=\"section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-4\" *ngFor=\"#item of messages\">\n                    <div id=\"pipeline-item\">\n                        <div class=\"text-center\">\n                            <img src=\"{{ item.image }}\">\n                        </div>\n                        <h2>{{ item.title }}</h2>\n                        <p class=\"context\">\n                            {{ item.message }}\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], HomePipeline);
    return HomePipeline;
})();
exports.HomePipeline = HomePipeline;
