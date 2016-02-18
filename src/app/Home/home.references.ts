import {Component} from 'angular2/core'
import {Partner} from "./Entity/Partner";

@Component({
    selector: 'home-references',
    template: `
        <div id="references">
            <div class="text-center">
                <h1 class="foreground">Our Partners</h1>
            </div>
            <div class="container">
                <div id="partners">
                    <div class="partner"  *ngFor="#item of partners">
                        <a href="#" title="#">
                            <img src="{{ item.logo }}">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class HomeReferences {
    public partners : Array<Partner>;

    constructor() {
        var base_dir = "img/partners/";
        this.partners = [];
        
        var l = base_dir + "partners_logos-01.png";
        var n = "qweqweqwe";
        var u = "qweqweqwe";
        this.partners.push(new Partner(l, u, n));

        var l = base_dir + "partners_logos-02.png";
        var n = "qweqweqwe";
        var u = "qweqweqwe";
        this.partners.push(new Partner(l, u, n));

        var l = base_dir + "partners_logos-03.png";
        var n = "qweqweqwe";
        var u = "qweqweqwe";
        this.partners.push(new Partner(l, u, n));
    }
}