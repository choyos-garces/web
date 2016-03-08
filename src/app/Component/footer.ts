import {Component} from "angular2/core";

@Component({
    selector: 'footer',
    template: `
    <footer id="footer">
        <div class="container">
            <div>&copy; 2016 <strong>HoyosGarc&eacute;s S.A.</strong> All rights reserved.</div>
        </div>
    </footer>
    `,
})
export class Footer {
    constructor() {

    }
}