import {Component} from 'angular2/core'

@Component({
    selector: 'home-our-staff',
    template: `
    <div id="our-staff">
        <div class="img-wrapper">
            <div id="mask"></div>
            <img src="img/separator.jpg">
        </div>
        <div id="quotes" class="container">
            <div class="text-center">
                <h1 class="foreground">From Our staff</h1>
            </div>
            <blockquote>
                <q>
                    Starting as a banana producers have taught us the value of <strong>Respect</strong>, a value we apply on all areas of our process.
                </q>
                <footer>
                    Freddy Hoyos, CEO
                </footer>
            </blockquote>
            <div class="read-more">
                <a href="#">Get to know them <i class="fa fa-long-arrow-right"></i></a>
            </div>
        </div>
    </div>
    `
})
export class HomeOurStaff {

}