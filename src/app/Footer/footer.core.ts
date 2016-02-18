import {Component} from "angular2/core";
import {Http} from 'angular2/http';
import {ApiResponse} from "../Interface/ApiResponse";
import {FooterMailer} from "./footer.mailer";

@Component({
    selector: 'footer-core',
    template: `
    <footer id="footer">
        <div class="container">
            <div class="text-center">
                <h1 class="foreground">Get In Touch</h1>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-6">
                    <p class="text-center">
                        Got any questions? Contact us via <a href="mailto:info@hoyosgarces.com">email</a>, or leave us a message below.
                    </p>
                    <footer-mailer></footer-mailer>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <p class="text-center">
                        Pay us a visit to any of out offices! We will gladly give you a tour of out plantations.
                    </p>
                    <div class="row">
                        <div class="col-xs-6" *ngFor="#contact of contacts">
                            <div class="map-container">
                                <iframe frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ97b_o6ZtLZARSoUL0y-X47s&key=AIzaSyA1-uzb8oTG0M5q6OQ5zFJ_IGoiWL6RzFQ" allowfullscreen></iframe>
                            </div>
                            <address>
                                <strong>{{ contact.name }}</strong><br />
                                {{ contact.addr }}<br />
                                {{ contact.city }}<br />
                                {{ contact.hours }}<br />
                                {{ contact.phone }}
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div class="modal fade" id="mailer-modal">
        <div class="modal-dialog  modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Notification</h4>
                </div>
                <div class="modal-body">
                    {{ notification }}
                </div>
            </div>
        </div>
    </div>
    `,
    directives: [FooterMailer]
})
export class Footer {
    notification : string;
    contacts : Array<any>;
    http : Http;
    constructor(http: Http) {
        this.http = http;
        //Get Contact Information
        this.http.get('/api/public/web/contact/')
            .map( response => {
                var res : ApiResponse = response.json()[0];
                if (res.success) {
                    return res.payload;
                }
                else return null
            })
            .subscribe(response => this.contacts = response, error => console.log("Couldn't load contacts"));
    }
}