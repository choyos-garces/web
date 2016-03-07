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
var http_1 = require("angular2/http");
var common_1 = require("angular2/common");
var HomeMessage = (function () {
    function HomeMessage(http, formBuilder) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.reset();
    }
    HomeMessage.prototype.reset = function () {
        this.mailer = this.formBuilder.group({
            'mail': [null, common_1.Validators.required],
            'subject': [null, common_1.Validators.required],
            'body': [null, common_1.Validators.required]
        });
    };
    HomeMessage.prototype.submit = function (values) {
        var _this = this;
        if (this.mailer.valid) {
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var body = "mail=" + values.mail + "&subject=" + values.subject + "&body=" + values.body;
            this.http.post('/api/public/web/contact/mailer', body, { headers: headers })
                .map(function (response) {
                return response.json()[0];
            })
                .subscribe(function (response) {
                if (response.success) {
                    alert("Message Sent"); //TODO create feed back for success
                    _this.reset();
                }
                else {
                    console.log(response.error);
                }
            }, function (error) { return console.log("Couldn't contact mail server"); } //TODO MOAR feedback
             //TODO MOAR feedback
            );
        }
        else {
            alert("Please fill all the form"); //TODO create nicer feed back on error
        }
    };
    HomeMessage = __decorate([
        core_1.Component({
            selector: 'home-message',
            template: "\n    <div id=\"message\" class=\"section\">\n        <div class=\"container\">\n            <h1 class=\"text-center\">Get in Touch</h1>\n            <div class=\"row\">\n                <form [ngFormModel]=\"mailer\" (ngSubmit)=\"submit(mailer.value)\" autocomplete=\"off\" spellcheck=\"false\">\n                <div class=\"col-sm-4 col-sm-offset-2\">\n                    <div class=\"form-group\">\n                        <input type=\"email\" class=\"form-control\" placeholder=\"E-mail\" [ngFormControl]=\"mailer.controls['mail']\"  autocapitalize=\"off\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Subject\" [ngFormControl]=\"mailer.controls['subject']\" autocapitalize=\"off\"/>\n                    </div>\n                </div>\n                <div class=\"col-sm-4\">\n                    <textarea class=\"form-control\" placeholder=\"Message\" [ngFormControl]=\"mailer.controls['body']\"  ></textarea>\n                </div>\n                <div class=\"col-xs-12\">\n                    <div class=\"text-center\">\n                        <input type=\"submit\" value=\"Send Message\" class=\"btn btn-primary\" />\n                    </div>\n                </div>\n                </form>\n            </div>\n            <div id=\"contact-icons\" class=\"text-center\">\n                <a href=\"mailto:info@hoyosgarces.com\" title=\"info@hoyosgarces.com\">\n                    <i class=\"fa fa-envelope fa-2x\"></i>\n                </a>\n                <a href=\"https://goo.gl/maps/Qamcir6pMjq\">\n                    <i class=\"fa fa-map fa-2x\"></i>\n                </a>\n                <a href=\"tel:+59342639290\" title=\"+59342639290\" value=\"+59342639290\">\n                    <i class=\"fa fa-phone-square fa-2x\"></i>\n                </a>\n            </div>\n        </div>\n    </div>\n    ",
            directives: [common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [http_1.Http, common_1.FormBuilder])
    ], HomeMessage);
    return HomeMessage;
})();
exports.HomeMessage = HomeMessage;
