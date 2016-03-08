import {Component} from 'angular2/core'
import {Http, Headers} from "angular2/http";
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from "angular2/common";
import {ApiResponse} from "../../Interface/ApiResponse";

@Component({
    selector : 'message',
    template : `
    <div id="message" class="section">
        <div class="container">
            <h1 class="text-center">Get in Touch</h1>
            <div class="row">
                <form [ngFormModel]="mailer" (ngSubmit)="submit(mailer.value)" autocomplete="off" spellcheck="false">
                <div class="col-sm-4 col-sm-offset-2">
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="E-mail" [ngFormControl]="mailer.controls['mail']"  autocapitalize="off" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Subject" [ngFormControl]="mailer.controls['subject']" autocapitalize="off"/>
                    </div>
                </div>
                <div class="col-sm-4">
                    <textarea class="form-control" placeholder="Message" [ngFormControl]="mailer.controls['body']"  ></textarea>
                </div>
                <div class="col-xs-12">
                    <div class="text-center">
                        <input type="submit" value="Send Message" class="btn btn-primary" />
                    </div>
                </div>
                </form>
            </div>
            <div id="contact-icons" class="text-center">
                <a href="mailto:info@hoyosgarces.com" title="info@hoyosgarces.com">
                    <i class="fa fa-envelope fa-2x"></i>
                </a>
                <a href="https://goo.gl/maps/Qamcir6pMjq">
                    <i class="fa fa-map fa-2x"></i>
                </a>
                <a href="tel:+59342639290" title="+59342639290" value="+59342639290">
                    <i class="fa fa-phone-square fa-2x"></i>
                </a>
            </div>
        </div>
    </div>
    `,
    directives: [FORM_DIRECTIVES]
})
export class HomeMessage {
    mailer : ControlGroup;

    constructor(private http : Http, private formBuilder : FormBuilder) {
        this.reset();
    }

    reset() {
        this.mailer = this.formBuilder.group({
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
                            alert("Message Sent"); //TODO create feed back for success
                            this.reset();
                        }
                        else {
                            console.log(response.error);
                        }
                    },
                    error => console.log("Couldn't contact mail server") //TODO MOAR feedback
                );
        }
        else {
            alert("Please fill all the form"); //TODO create nicer feed back on error
        }
    }
}