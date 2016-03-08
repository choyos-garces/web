import {Component} from 'angular2/core'
import {HomeSlider} from './Home/Slider'
import {HomeCompromise} from './Home/Compromise'
import {HomeArticle} from './Home/Article'
import {HomePipeline} from './Home/Pipeline'
import {HomeMessage} from './Home/Message'

@Component({
    selector: 'home',
    template: `
    <main>
        <slider></slider>
        <compromise></compromise>
        <article></article>
        <pipeline></pipeline>
        <message></message>
    </main>
    `,
    directives: [HomeSlider, HomeCompromise, HomeArticle, HomePipeline, HomeMessage]
})
export class Home {

}