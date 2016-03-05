import {Component} from 'angular2/core'
import {Compromise} from "./Interface/Compromise";

@Component({
    selector : 'home-compromise',
    template : `
    <div id="compromise" class="section">
        <div class="container">
            <h2 class="text-center">Our Compromise</h2>
            <div class="row">
                <div *ngFor="#icon of icons" class="compromise-item col-xs-6 col-sm-4 col-md-2">
                    <div>
                        <img class="compromise-ico" src="{{ icon.main }}"/>
                        <img class="compromise-ico-alt" src="{{ icon.alt }}"/>
                    </div>
                    <div class="compromise-label text-center context">{{ icon.label }}</div>
                </div>
            </div>
        </div>
    </div>
    `
})
export class HomeCompromise {
    public icons : Array<any> = [];

    constructor() {
        this.icons.push(
            new Compromise('img/compromise/ico_organic', 'Organic'),
            new Compromise('img/compromise/ico_fairtrade', 'Fair Trade'),
            new Compromise('img/compromise/ico_quantity', 'Variaety'),
            new Compromise('img/compromise/ico_quality', 'Expirience'),
            new Compromise('img/compromise/ico_affordable', 'Flexibility'),
            new Compromise('img/compromise/ico_efficient', 'Efficiency')
        )
    }
}