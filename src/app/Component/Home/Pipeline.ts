import {Component} from 'angular2/core'
import {Pipeline} from "../../Interface/Pipeline";

@Component({
    selector: 'pipeline',
    template: `
    <div id="pipeline" class="section">
        <div class="container">
            <div class="row">
                <div class="col-md-4" *ngFor="#item of messages">
                    <div id="pipeline-item">
                        <div class="text-center">
                            <img src="{{ item.image }}">
                        </div>
                        <h2>{{ item.title }}</h2>
                        <p class="context">
                            {{ item.message }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
})

export class HomePipeline {
    public messages : Array<Pipeline> = [];

    constructor() {
        var image = "pipeline_guarantee";
        var title = "Our 100% organic production.";
        var message = "Our flag ship product, verified by numerous certidfications. We can guarantee that quality of our organic bananas is the best in the region. Take some time to read our fruit specifitacions or contact us, you wont regret it.";
        this.messages.push(new Pipeline(title, message, image));

        var image = "pipeline_premium";
        var title = "Convencional Premium bananas.";
        var message = "Our convencional bananas providiers go through some rigurous selection process. You can expect similar quality from our organic products at a more affordable prices. Read about our selection process and meet our staff in charge.";
        this.messages.push(new Pipeline(title, message, image));

        var image = "pipeline_global";
        var title = "To Europe, Middle East, USA and more.";
        var message = "Hemos exportado a todos estos lugares con excelents resultados. Con nuestra propia marca o como proveedores, nunca hemos tenido algun invonveniente con nuestros cliente. Conoce al equipo responsable de este proceso.";
        this.messages.push(new Pipeline(title, message, image));
    }
}