import {Component} from 'angular2/core'
import {NavItem} from "./Entiy/NavItem";
import {NgFor} from "angular2/common";

@Component({
    selector: 'nav-core',
    template: `
    <nav>
        <div class="container">
            <div class="label">
                <span class="green">Hoyos</span><span class="blue">Garc&eacute;s</span>
            </div>
            <div id="logo">
                <img src="img/logo-small.svg">
            </div>
            <ul class="menu-items">
                <li *ngFor="#item of navItems">
                    <a href="{{ item.url }}" (click)="scrollTo(item.url)">{{ item.label }}</a>
                </li>
                <li class="menu" (click)="toggleCloset()">
                    <span class="fa fa-lg fa-bars"></span>
                </li>
            </ul>
        </div>
    </nav>
    <div id="nav-full" class="closet-hide">
        <div id="nav-full-close" class="text-right" (click)="toggleCloset()">
            <img src="img/icons/close.svg">
        </div>
        <ul class="nav-items">
            <li *ngFor="#item of navItems">
                <a href="{{ item.url }}" (click)="scrollTo(item.url)">{{ item.label }}</a>
            </li>
        </ul>
    </div>
    `,
    directives: [NgFor]
})
export class Nav {
    public navItems : Array<NavItem>;

    constructor() {
        this.navItems = [];

        var u = "#pipeline";
        var l = "About Us";
        this.navItems.push(new NavItem(u, l));

        var u = "#history";
        var l = "Our History";
        this.navItems.push(new NavItem(u, l));

        var u = "#contact";
        var l = "Contact Us";
        this.navItems.push(new NavItem(u, l));

    }

    public toggleCloset() {
        var closet = document.querySelector("#nav-full");
        closet.classList.toggle("closet-hide");

        var body = document.querySelector("body");
        body.classList.toggle("locked");
    }

    public scrollTo(target) {
        var t = jQuery(target);

        if(t.length) {
            jQuery('html, body').animate({
                scrollTop: t.offset().top-45
            }, 600);
        }

        var closet = document.querySelector("#nav-full");

        if(!closet.classList.contains("closet-hide")) {
            this.toggleCloset();
        }

        return false;
    }

}
