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
var Compromise_1 = require("./Interface/Compromise");
var HomeCompromise = (function () {
    function HomeCompromise() {
        this.icons = [];
        this.icons.push(new Compromise_1.Compromise('img/compromise/ico_organic', 'Organic'), new Compromise_1.Compromise('img/compromise/ico_fairtrade', 'Fair Trade'), new Compromise_1.Compromise('img/compromise/ico_quantity', 'Variaety'), new Compromise_1.Compromise('img/compromise/ico_quality', 'Expirience'), new Compromise_1.Compromise('img/compromise/ico_affordable', 'Flexibility'), new Compromise_1.Compromise('img/compromise/ico_efficient', 'Efficiency'));
    }
    HomeCompromise = __decorate([
        core_1.Component({
            selector: 'home-compromise',
            template: "\n    <div id=\"compromise\" class=\"section\">\n        <div class=\"container\">\n            <h2 class=\"text-center\">Our Compromise</h2>\n            <div class=\"row\">\n                <div *ngFor=\"#icon of icons\" class=\"compromise-item col-xs-6 col-sm-4 col-md-2\">\n                    <div>\n                        <img class=\"compromise-ico\" src=\"{{ icon.main }}\"/>\n                        <img class=\"compromise-ico-alt\" src=\"{{ icon.alt }}\"/>\n                    </div>\n                    <div class=\"compromise-label text-center context\">{{ icon.label }}</div>\n                </div>\n            </div>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], HomeCompromise);
    return HomeCompromise;
})();
exports.HomeCompromise = HomeCompromise;
