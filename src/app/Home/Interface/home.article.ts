import {Component} from 'angular2/core'

@Component({
    selector: 'home-article',
    template: `
    <div id="article" class="section">
        <div class="container">
            <div class="row">
                <div class="col-md-2 hidden-md hidden-sm hidden-xs text-center">
                    <img src="img/sticker-organic-medium.svg" />
                </div>
                <div class="col-sm-6 col-md-4 col-sm-pull-6 col-sm-push-4">
                    <div id="article-carousel">
                        <img src="img/history/freddy.jpg"/>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-sm-pull-6 col-sm-pull-4">
                    <h1>{{ title }}</h1>
                    <p class="context">{{ body }}</p>
                </div>
                <div class="col-md-2">
                </div>
            </div>
        </div>
    </div>
    `
})
export class HomeArticle {
    public body : string;
    public title : string;

    constructor() {
        this.title = "Three Generations and counting.";
        this.body = "With more than three generations of experience in the care and maintenance of bananas farms, we can guarantee that our product is simply the best. Rest assured that the highest international quality standards are maintained in all our farms. From the time of plantation, harvesting and finally the packaging, team of qualified experts make sure the product is of the highest quality.";
    }
}