import {Component} from 'angular2/core'

@Component({
    selector: 'home-slider',
    template: `
    <div id="slider">
            <div id="welcome-message" class="container">
                <div class="text-center">
                    <img id="slider-logo" src="img/logo-white.svg" />
                </div>
                <h1>From our family to your table.</h1>
                <p>Top Quality and Affordable ecuadorian bananas.</p>
                <div class="text-center">
                    <button class="btn btn-primary">Learn more about our history</button>
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