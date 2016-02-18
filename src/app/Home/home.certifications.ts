import {Component} from 'angular2/core'
import {Certification} from "./Entity/Certification";

@Component({
    selector: 'home-certifications',
    template: `
        <div id="certifications">
            <div class="text-center">
                <h1 class="foreground">Our Certifications</h1>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-xs-6 col-sm-4 col-lg-3"  *ngFor="#item of certifications">
                        <a href="{{ item.url }}" title="{{ item.name }}">
                            <img src="{{ item.logo }}">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class HomeCertifications {
    public certifications : Array<Certification> = [];

    constructor() {
        var base_dir = "img/certificados";
        var name = "Agricultura Biologica";
        var logo = base_dir + "/logos_eu.svg";
        var url = "#eu";
        this.certifications.push(new Certification(name, logo, url));

        var name = "Global G.A.P.";
        var logo = base_dir + "/logos_globalgap.svg";
        var url = "#eu";
        this.certifications.push(new Certification(name, logo, url));

        var name = "USDA Organic";
        var logo = base_dir + "/logos_usda.svg";
        var url = "#usda";
        this.certifications.push(new Certification(name, logo, url));

        var name = "Fairtrade";
        var logo = base_dir + "/logos_fairtrade.svg";
        var url = "#fair";
        this.certifications.push(new Certification(name, logo, url));

        var name = "FDA Aproved";
        var logo = base_dir + "/logos_fda.svg";
        var url = "#fda";
        this.certifications.push(new Certification(name, logo, url));

        var name = "Ecuador Love Live";
        var logo = base_dir + "/logos_ecuador.svg";
        var url = "#ec";
        this.certifications.push(new Certification(name, logo, url));
    }
}