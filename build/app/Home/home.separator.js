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
var HomeSeparator = (function () {
    function HomeSeparator() {
    }
    HomeSeparator = __decorate([
        core_1.Component({
            selector: 'home-separator',
            template: "\n    <div id=\"separator\">\n        <div class=\"img-wrapper\">\n            <div id=\"mask\"></div>\n            <img src=\"img/separator.jpg\">\n        </div>\n        <div id=\"motto\" class=\"container\">\n            <div class=\"text-center\">\n                <h1 class=\"foreground\">From Our staff</h1>\n            </div>\n            <blockquote>\n                <q>\n                    Starting as a banana producers have taught us the value of <strong>Respect</strong>, a value we apply on all areas of our process.\"\n                </q>\n                <footer>\n                    Freddy Hoyos, CEO\n                </footer>\n            </blockquote>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], HomeSeparator);
    return HomeSeparator;
})();
exports.HomeSeparator = HomeSeparator;
//# sourceMappingURL=home.separator.js.map