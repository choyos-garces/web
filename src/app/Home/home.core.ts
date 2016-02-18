import {Component} from 'angular2/core'
import {HomeSlider} from './home.slider'
import {HomePipeline} from "./home.pipeline";
import {HomeHistory} from "./home.history";
import {HomeOurStaff} from "./home.ourStaff";
import {HomeCertifications} from "./home.certifications";

@Component({
    selector: 'home-core',
    template: `
    <main>
        <home-slider></home-slider>
        <home-pipeline></home-pipeline>
        <home-certifications></home-certifications>
        <home-our-staff></home-our-staff>
        <home-history></home-history>
    </main>
    `,
    directives: [HomeSlider, HomePipeline, HomeCertifications, HomeOurStaff,HomeHistory]
})
export class Home {

}