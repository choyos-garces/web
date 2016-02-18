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
var common_1 = require("angular2/common");
var http_1 = require("angular2/http");
var FooterMailer = (function () {
    function FooterMailer(http, fb) {
        this.http = http;
        this.fb = fb;
        this.reset();
    }
    FooterMailer.prototype.reset = function () {
        this.mailer = this.fb.group({
            'mail': [null, common_1.Validators.required],
            'subject': [null, common_1.Validators.required],
            'body': [null, common_1.Validators.required]
        });
    };
    FooterMailer.prototype.submit = function (values) {
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
                    console.log(true);
                    _this.reset();
                }
                else {
                    console.log(response.error);
                }
            }, function (error) { return console.log("Couldn't contact mail server"); });
        }
        else {
            alert("Can not access target");
        }
    };
    FooterMailer = __decorate([
        core_1.Component({
            selector: "footer-mailer",
            template: "\n    <form [ngFormModel]=\"mailer\" (ngSubmit)=\"submit(mailer.value)\">\n        <div class=\"form-group\">\n            <label for=\"mail\">E-mail</label>\n            <input type=\"email\" id=\"mail\"  class=\"form-control\" [ngFormControl]=\"mailer.controls['mail']\"/>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"subject\">Subject</label>\n            <input type=\"text\" id=\"subject\"  class=\"form-control\" [ngFormControl]=\"mailer.controls['subject']\"/>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"body\">Message</label>\n            <textarea id=\"body\" class=\"form-control\" [ngFormControl]=\"mailer.controls['body']\"></textarea>\n        </div>\n        <div class=\"form-group\">\n            <input type=\"submit\" class=\"btn btn-default\">\n        </div>\n    </form>\n    ",
            directives: [common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [http_1.Http, common_1.FormBuilder])
    ], FooterMailer);
    return FooterMailer;
})();
exports.FooterMailer = FooterMailer;
//# sourceMappingURL=footer.mailer.js.map