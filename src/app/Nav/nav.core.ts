import {Component} from 'angular2/core'
import {NavItem} from "./Entiy/NavItem";
import {NgFor} from "angular2/common";

@Component({
    selector: 'nav-core',
    template: `
    <nav>
        <div class="container">
            <span class="company-name">
                HoyosGarc&eacute;s
            </span>
            <ul class="menu-items">
                <li *ngFor="#item of navItems">
                    <a href="{{ item.url }}">{{ item.label }}</a>
                </li>
            </ul>
        </div>
    </nav>
    `,
    directives: [NgFor]
})
export class Nav {
    public navItems : Array<NavItem>;

    constructor() {
        this.navItems = [];

        var u = "#pipeline";
        var l = "Contact Us";
        this.navItems.push(new NavItem(u, l));

        var u = "#history";
        var l = "Services";
        this.navItems.push(new NavItem(u, l));

        var u = "#contact";
        var l = "Products";
        this.navItems.push(new NavItem(u, l));
    }

}
