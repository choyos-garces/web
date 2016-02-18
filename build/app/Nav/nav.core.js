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
var NavItem_1 = require("./Entiy/NavItem");
var common_1 = require("angular2/common");
var Nav = (function () {
    function Nav() {
        this.navItems = [];
        var u = "#pipeline";
        var l = "About Us";
        this.navItems.push(new NavItem_1.NavItem(u, l));
        var u = "#history";
        var l = "Our History";
        this.navItems.push(new NavItem_1.NavItem(u, l));
        var u = "#contact";
        var l = "Contact Us";
        this.navItems.push(new NavItem_1.NavItem(u, l));
    }
    Nav.prototype.toggleCloset = function () {
        var closet = document.querySelector("#nav-full");
        closet.classList.toggle("closet-hide");
        var body = document.querySelector("body");
        body.classList.toggle("locked");
    };
    Nav.prototype.scrollTo = function (target) {
        var t = jQuery(target);
        if (t.length) {
            jQuery('html, body').animate({
                scrollTop: t.offset().top - 45
            }, 600);
        }
        var closet = document.querySelector("#nav-full");
        if (!closet.classList.contains("closet-hide")) {
            this.toggleCloset();
        }
        return false;
    };
    Nav = __decorate([
        core_1.Component({
            selector: 'nav-core',
            template: "\n    <nav>\n        <div class=\"container\">\n            <div class=\"label\">\n                <span class=\"green\">Hoyos</span><span class=\"blue\">Garc&eacute;s</span>\n            </div>\n            <div id=\"logo\">\n                <img src=\"img/logo-small.svg\">\n            </div>\n            <ul class=\"menu-items\">\n                <li *ngFor=\"#item of navItems\">\n                    <a href=\"{{ item.url }}\" (click)=\"scrollTo(item.url)\">{{ item.label }}</a>\n                </li>\n                <li class=\"menu\" (click)=\"toggleCloset()\">\n                    <span class=\"fa fa-lg fa-bars\"></span>\n                </li>\n            </ul>\n        </div>\n    </nav>\n    <div id=\"nav-full\" class=\"closet-hide\">\n        <div id=\"nav-full-close\" class=\"text-right\" (click)=\"toggleCloset()\">\n            <img src=\"img/icons/close.svg\">\n        </div>\n        <ul class=\"nav-items\">\n            <li *ngFor=\"#item of navItems\">\n                <a href=\"{{ item.url }}\" (click)=\"scrollTo(item.url)\">{{ item.label }}</a>\n            </li>\n        </ul>\n    </div>\n    ",
            directives: [common_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], Nav);
    return Nav;
})();
exports.Nav = Nav;
//# sourceMappingURL=nav.core.js.map