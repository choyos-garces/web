import 'rxjs/Rx'
import {bootstrap} from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from "angular2/http";

import {Home} from './Home/home.core'
import {Nav} from "./Nav/nav.core";
import {Footer} from './Footer/footer.core'
import {FORM_PROVIDERS} from "angular2/common";

bootstrap(Nav);
bootstrap(Home, [HTTP_PROVIDERS]);
bootstrap(Footer, [HTTP_PROVIDERS]);