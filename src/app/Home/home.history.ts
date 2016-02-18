import {Component} from 'angular2/core'

@Component({
    selector: 'home-history',
    template: `
    <div id="history" class="container">
        <div class="text-center">
            <h1>Our History</h1>
        </div>
        <div>
            <div class="history-row">
                <div class="img-wrapper l">
                    <div class="img-fix">
                        <img src="img/history/old.jpg">
                    </div>
                </div>
                <p>
                    As a child Freddy Hoyos Cobo had a vision inspired by his greatest role model, his grandfather. It was watching how his grandfather took care of the plantations that this passion grew on him. He dreamed of one day reaching markets around the world with his fruit. To achieve this goal he decided from a young age to take part the family business. It was with them he acquired the knowledge on how to take care of the land and manage a small business.
                </p>
            </div>
            <div class="history-row">
                <div class="img-wrapper r">
                    <div class="img-fix">
                        <img src="img/history/freddy.jpg">
                    </div>
                </div>
                <p>
                    It was in 1991 that he was finally able to become independent by leasing a plantation. Here he experimented with new methods and honed new techniques that were later adopted by farmer of the region. After only two year of hard work, he was able to buy the land he was previously leasing and soon after he grew more and more. He quickly realized this was not enough, and by the year 2000 he was the first farmer in the region to adopt eco friendly standards and eventually certified all his plantations as organic.
                </p>
            </div>
            <div class="history-row">
                <div class="img-wrapper l">
                    <div class="img-fix">
                        <img src="img/history/parqueadero.jpg">
                    </div>
                </div>
                <p>
                    Now, a new generation stepped in. After witnessing all the hard work his father has done, they started a project that could help them reach his father’s goals. Together the two eldest sons, Freddy Hoyos Jr. and Christopher Hoyos, funded <strong>HoyosGarces S.A.</strong> in the year 2012. When the company started , it was exporting 6 containers of bananas weekly. Nowadays it had capacity of fulfilling any requirements and quantities our clients demand. All of thi while still meeting the clients and our very own high quality standards.
                </p>
            </div>
        </div>
    </div>
    `
})
export class HomeHistory {

}