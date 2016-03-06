import {Component} from 'angular2/core'
import {HomeSlider} from './home.slider'
import {HomeCompromise} from "./home.compromise";
import {HomeArticle} from "./home.article";
import {HomePipeline} from "./home.pipeline";

@Component({
    selector: 'home-core',
    template: `
    <main>
        <home-slider></home-slider>
        <home-compromise></home-compromise>
        <home-article></home-article>
        <home-pipeline></home-pipeline>
    </main>
    `,
    directives: [HomeSlider, HomeCompromise, HomeArticle, HomePipeline]
})
export class Home {

}