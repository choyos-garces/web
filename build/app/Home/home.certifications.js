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
var Certification_1 = require("./Interface/Certification");
var HomeCertifications = (function () {
    function HomeCertifications() {
        this.certifications = [];
        var base_dir = "img/certificados";
        var name = "Agricultura Biologica";
        var logo = base_dir + "/logos_eu.svg";
        var url = "#eu";
        this.certifications.push(new Certification_1.Certification(name, logo, url));
        var name = "Global G.A.P.";
        var logo = base_dir + "/logos_globalgap.svg";
        var url = "#eu";
        this.certifications.push(new Certification_1.Certification(name, logo, url));
        var name = "USDA Organic";
        var logo = base_dir + "/logos_usda.svg";
        var url = "#usda";
        this.certifications.push(new Certification_1.Certification(name, logo, url));
        var name = "Fairtrade";
        var logo = base_dir + "/logos_fairtrade.svg";
        var url = "#fair";
        this.certifications.push(new Certification_1.Certification(name, logo, url));
        var name = "FDA Aproved";
        var logo = base_dir + "/logos_fda.svg";
        var url = "#fda";
        this.certifications.push(new Certification_1.Certification(name, logo, url));
        var name = "Ecuador Love Live";
        var logo = base_dir + "/logos_ecuador.svg";
        var url = "#ec";
        this.certifications.push(new Certification_1.Certification(name, logo, url));
    }
    HomeCertifications = __decorate([
        core_1.Component({
            selector: 'home-certifications',
            template: "\n        <div id=\"certifications\">\n            <div class=\"text-center\">\n                <h1 class=\"foreground\">Our Certifications</h1>\n            </div>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-xs-6 col-sm-4 col-lg-3\"  *ngFor=\"#item of certifications\">\n                        <a href=\"{{ item.url }}\" title=\"{{ item.name }}\">\n                            <img src=\"{{ item.logo }}\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], HomeCertifications);
    return HomeCertifications;
})();
exports.HomeCertifications = HomeCertifications;
