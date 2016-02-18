import {Component} from "angular2/core";
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from "angular2/common";
import {Http, Headers} from "angular2/http";
import {ApiResponse} from "../Interface/ApiResponse";

@Component({
    selector: "footer-mailer",
    template: `
    <form [ngFormModel]="mailer" (ngSubmit)="submit(mailer.value)">
        <div class="form-group">
            <label for="mail">E-mail</label>
            <input type="email" id="mail"  class="form-control" [ngFormControl]="mailer.controls['mail']"/>
        </div>
        <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject"  class="form-control" [ngFormControl]="mailer.controls['subject']"/>
        </div>
        <div class="form-group">
            <label for="body">Message</label>
            <textarea id="body" class="form-control" [ngFormControl]="mailer.controls['body']"></textarea>
        </div>
        <div class="form-group">
            <input type="submit" class="btn btn-default">
        </div>
    </form>
    `,
    directives: [FORM_DIRECTIVES]
})
export class FooterMailer {
    mailer : ControlGroup;

    constructor(private http : Http, private fb : FormBuilder) {
        this.reset();
    }

    reset() {
        this.mailer = this.fb.group({
            'mail' : [null, Validators.required],
            'subject' : [null, Validators.required],
            'body' : [null, Validators.required]
        });
    }

    submit(values: any) {
        if(this.mailer.valid) {
            var headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            var body = "mail="+values.mail+"&subject="+values.subject+"&body="+values.body;
            this.http.post('/api/public/web/contact/mailer', body, {headers})
                .map(response => {
                    return response.json()[0];
                })
                .subscribe( (response : ApiResponse) => {
                        if(response.success) {
                            console.log(true);
                            this.reset();
                        }
                        else {
                            console.log(response.error);
                        }
                    },
                    error => console.log("Couldn't contact mail server")
                );
        }
        else {
            alert("Can not access target");
        }
    }
}