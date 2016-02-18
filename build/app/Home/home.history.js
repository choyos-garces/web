var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var HomeHistory = (function () {
    function HomeHistory() {
    }
    HomeHistory = __decorate([
        core_1.Component({
            selector: 'home-history',
            template: "\n    <div id=\"history\" class=\"container\">\n        <div class=\"text-center\">\n            <h1>Our History</h1>\n        </div>\n        <div>\n            <div class=\"history-row\">\n                <div class=\"img-wrapper l\">\n                    <div class=\"img-fix\">\n                        <img src=\"img/history/old.jpg\">\n                    </div>\n                </div>\n                <p>\n                    As a child Freddy Hoyos Cobo had a vision inspired by his greatest role model, his grandfather. It was watching how his grandfather took care of the plantations that this passion grew on him. He dreamed of one day reaching markets around the world with his fruit. To achieve this goal he decided from a young age to take part the family business. It was with them he acquired the knowledge on how to take care of the land and manage a small business.\n                </p>\n            </div>\n            <div class=\"history-row\">\n                <div class=\"img-wrapper r\">\n                    <div class=\"img-fix\">\n                        <img src=\"img/history/freddy.jpg\">\n                    </div>\n                </div>\n                <p>\n                    It was in 1991 that he was finally able to become independent by leasing a plantation. Here he experimented with new methods and honed new techniques that were later adopted by farmer of the region. After only two year of hard work, he was able to buy the land he was previously leasing and soon after he grew more and more. He quickly realized this was not enough, and by the year 2000 he was the first farmer in the region to adopt eco friendly standards and eventually certified all his plantations as organic.\n                </p>\n            </div>\n            <div class=\"history-row\">\n                <div class=\"img-wrapper l\">\n                    <div class=\"img-fix\">\n                        <img src=\"img/history/parqueadero.jpg\">\n                    </div>\n                </div>\n                <p>\n                    Now, a new generation stepped in. After witnessing all the hard work his father has done, they started a project that could help them reach his father\u2019s goals. Together the two eldest sons, Freddy Hoyos Jr. and Christopher Hoyos, funded <strong>HoyosGarces S.A.</strong> in the year 2012. When the company started , it was exporting 6 containers of bananas weekly. Nowadays it had capacity of fulfilling any requirements and quantities our clients demand. All of thi while still meeting the clients and our very own high quality standards.\n                </p>\n            </div>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], HomeHistory);
    return HomeHistory;
})();
exports.HomeHistory = HomeHistory;
//# sourceMappingURL=home.history.js.map