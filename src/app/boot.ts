import 'rxjs/Rx'
import {bootstrap} from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from "angular2/http";

import {Home} from './Component/home'
import {Navbar} from "./Component/navbar";
import {Footer} from './Component/footer'
import {FORM_PROVIDERS} from "angular2/common";

bootstrap(Navbar);
bootstrap(Home, [HTTP_PROVIDERS]);
bootstrap(Footer, [HTTP_PROVIDERS]);