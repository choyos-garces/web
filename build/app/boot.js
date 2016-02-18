require('rxjs/Rx');
var browser_1 = require('angular2/platform/browser');
var http_1 = require("angular2/http");
var home_core_1 = require('./Home/home.core');
var nav_core_1 = require("./Nav/nav.core");
var footer_core_1 = require('./Footer/footer.core');
browser_1.bootstrap(nav_core_1.Nav);
browser_1.bootstrap(home_core_1.Home, [http_1.HTTP_PROVIDERS]);
browser_1.bootstrap(footer_core_1.Footer, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=boot.js.map