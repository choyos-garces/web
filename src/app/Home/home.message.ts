import {Component} from 'angular2/core'

@Component({
    selector : 'home-message',
    template : `
    <div id="message" class="section">
        <div class="container">
            <h1 class="text-center">Get in Touch</h1>
            <div class="row">

                <div class="col-sm-4 col-sm-offset-2">
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="E-mail" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Subject"/>
                    </div>
                </div>
                <div class="col-sm-4">
                    <textarea class="form-control" placeholder="Message"></textarea>
                </div>
                <div class="col-xs-12">
                    <div class="text-center">
                        <button class="btn btn-primary">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
})
export class HomeMessage {
    constructor() {

    }
}