import {Component} from 'angular2/core'

@Component({
    selector: 'home-slider',
    template: `
    <div id="slider">
        <div class="vignette"></div>
        <div class="img-wrapper">
            <img src="img/slider/bananera.jpg" />
        </div>
        <div id="welcome-message" class="wrapper">
            <div id="welcome-message-wrapper">
                <div class="text-center">
                    <img src="img/logo-white.svg">
                </div>
                <div class="text-center">
                    <h1 class="foreground">HoyosGarc&eacute;s</h1>
                </div>
                <p class="text-center">
                    Love life, love Bananas!
                </p>
            </div>
        </div>
    </div>
    `
})
export class HomeSlider {

    constructor() {
        var nav = document.querySelector("nav");
        window.addEventListener("scroll", function () {
            var slider = document.getElementById("slider").offsetHeight-85;

            if (this.scrollY > slider) {
                nav.classList.add("fixed");
            }
            else
                nav.classList.remove("fixed");
        });
    }
}