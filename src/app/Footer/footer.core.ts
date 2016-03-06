import {Component} from "angular2/core";

@Component({
    selector: 'footer-core',
    template: `
    <footer id="footer">
        <div class="container">
            <span class="context">&copy; 2012-2016 HoyosGarc&eacute;s S.A. All rights reserved.</span>
        </div>
    </footer>
    `,
})
export class Footer {
    constructor() {

    }
}