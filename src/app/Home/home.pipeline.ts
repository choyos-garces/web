import {Component} from 'angular2/core'
import {PipeItem} from "./Interface/PipeItem";

@Component({
    selector: 'home-pipeline',
    template: `
    <div id="pipeline" class="container">
        <div class="text-center">
            <h1>Only the very best</h1>
        </div>
        <div class="col-md-4" *ngFor="#item of messages">
            <div class="item">
                <div class="item-image">
                    <img src="{{ item.image }}">
                </div>
                <div class="item-content">
                    <h3>{{ item.title }}</h3>
                    <p>
                        {{ item.message }}
                    </p>
                </div>
            </div>
        </div>
        <div class="read-more">
            <a href="#">Read More <i class="fa fa-long-arrow-right"></i></a>
        </div>
    </div>
    `
})

export class HomePipeline {
    public messages : Array<PipeItem>;

    constructor() {
        this.messages = [];

        var image = "bananas.jpg";
        var title = "Outstanding Quality";
        var message = "Rest assured that the highest international quality standards are maintained in all our plantations. From the time of plantation, harvesting and finally the packaging, our team takes care that the product is of the highest quality.";
        this.messages.push(new PipeItem(title, message, image));

        var image = "parqueadero.jpg";
        var title = "Plenty of Experience";
        var message = "With more than three generations of experience in the care and maintenance of bananas farms, we can guarantee that our product is the best. Time has taught us to reap great benefit and with minimum impact within our plantations.";
        this.messages.push(new PipeItem(title, message, image));

        var image = "hoja.jpg";
        var title = "Our Compromise";
        var message = "Our level of compromise starts from our farms, on each box and every container. For us communication is key with our employees, providers and clients. Our goal is to provide an outstanding product that will exceed our customer's expectations.";
        this.messages.push(new PipeItem(title, message, image));
    }
}