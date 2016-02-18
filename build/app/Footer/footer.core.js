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
var core_1 = require("angular2/core");
var http_1 = require('angular2/http');
var footer_mailer_1 = require("./footer.mailer");
var Footer = (function () {
    function Footer(http) {
        var _this = this;
        this.http = http;
        //Get Contact Information
        this.http.get('/api/public/web/contact/')
            .map(function (response) {
            var res = response.json()[0];
            if (res.success) {
                return res.payload;
            }
            else
                return null;
        })
            .subscribe(function (response) { return _this.contacts = response; }, function (error) { return console.log("Couldn't load contacts"); });
    }
    Footer = __decorate([
        core_1.Component({
            selector: 'footer-core',
            template: "\n    <footer id=\"footer\">\n        <div class=\"container\">\n            <div class=\"text-center\">\n                <h1 class=\"foreground\">Get In Touch</h1>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-6\">\n                    <p class=\"text-center\">\n                        Got any questions? Contact us via <a href=\"mailto:info@hoyosgarces.com\">email</a>, or leave us a message below.\n                    </p>\n                    <footer-mailer></footer-mailer>\n                </div>\n                <div class=\"col-xs-12 col-sm-6\">\n                    <p class=\"text-center\">\n                        Pay us a visit to any of out offices! We will gladly give you a tour of out plantations.\n                    </p>\n                    <div class=\"row\">\n                        <div class=\"col-xs-6\" *ngFor=\"#contact of contacts\">\n                            <div class=\"map-container\">\n                                <iframe frameborder=\"0\" src=\"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ97b_o6ZtLZARSoUL0y-X47s&key=AIzaSyA1-uzb8oTG0M5q6OQ5zFJ_IGoiWL6RzFQ\" allowfullscreen></iframe>\n                            </div>\n                            <address>\n                                <strong>{{ contact.name }}</strong><br />\n                                {{ contact.addr }}<br />\n                                {{ contact.city }}<br />\n                                {{ contact.hours }}<br />\n                                {{ contact.phone }}\n                            </address>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </footer>\n    <div class=\"modal fade\" id=\"mailer-modal\">\n        <div class=\"modal-dialog  modal-sm\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">Notification</h4>\n                </div>\n                <div class=\"modal-body\">\n                    {{ notification }}\n                </div>\n            </div>\n        </div>\n    </div>\n    ",
            directives: [footer_mailer_1.FooterMailer]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Footer);
    return Footer;
})();
exports.Footer = Footer;
//# sourceMappingURL=footer.core.js.map