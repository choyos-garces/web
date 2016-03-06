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
var HomeMessage = (function () {
    function HomeMessage() {
    }
    HomeMessage = __decorate([
        core_1.Component({
            selector: 'home-message',
            template: "\n    <div id=\"message\" class=\"section\">\n        <div class=\"container\">\n            <h1 class=\"text-center\">Get in Touch</h1>\n            <div class=\"row\">\n\n                <div class=\"col-sm-4 col-sm-offset-2\">\n                    <div class=\"form-group\">\n                        <input type=\"email\" class=\"form-control\" placeholder=\"E-mail\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Subject\"/>\n                    </div>\n                </div>\n                <div class=\"col-sm-4\">\n                    <textarea class=\"form-control\" placeholder=\"Message\"></textarea>\n                </div>\n                <div class=\"col-xs-12\">\n                    <div class=\"text-center\">\n                        <button class=\"btn btn-primary\">Send Message</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], HomeMessage);
    return HomeMessage;
})();
exports.HomeMessage = HomeMessage;
