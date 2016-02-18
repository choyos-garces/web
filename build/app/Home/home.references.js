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
var Partner_1 = require("./Entity/Partner");
var HomeReferences = (function () {
    function HomeReferences() {
        var base_dir = "img/partners/";
        this.partners = [];
        var l = base_dir + "partners_logos-01.png";
        var n = "qweqweqwe";
        var u = "qweqweqwe";
        this.partners.push(new Partner_1.Partner(l, u, n));
        var l = base_dir + "partners_logos-02.png";
        var n = "qweqweqwe";
        var u = "qweqweqwe";
        this.partners.push(new Partner_1.Partner(l, u, n));
        var l = base_dir + "partners_logos-03.png";
        var n = "qweqweqwe";
        var u = "qweqweqwe";
        this.partners.push(new Partner_1.Partner(l, u, n));
    }
    HomeReferences = __decorate([
        core_1.Component({
            selector: 'home-references',
            template: "\n        <div id=\"references\">\n            <div class=\"text-center\">\n                <h1 class=\"foreground\">Our Partners</h1>\n            </div>\n            <div class=\"container\">\n                <div id=\"partners\">\n                    <div class=\"partner\"  *ngFor=\"#item of partners\">\n                        <a href=\"#\" title=\"#\">\n                            <img src=\"{{ item.logo }}\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], HomeReferences);
    return HomeReferences;
})();
exports.HomeReferences = HomeReferences;
//# sourceMappingURL=home.references.js.map