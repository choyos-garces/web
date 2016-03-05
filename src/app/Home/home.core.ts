import {Component} from 'angular2/core'
import {HomeSlider} from './home.slider'
import {HomeHistory} from "./home.history";
import {HomeOurStaff} from "./home.ourStaff";
import {HomeCertifications} from "./home.certifications";
import {HomeCompromise} from "./home.compromise";
import {HomeArticle} from "./Interface/home.article";

@Component({
    selector: 'home-core',
    template: `
    <main>
        <home-slider></home-slider>
        <home-compromise></home-compromise>
        <home-article></home-article>
    </main>
    `,
    directives: [HomeSlider, HomeCompromise, HomeArticle]
})
export class Home {

}