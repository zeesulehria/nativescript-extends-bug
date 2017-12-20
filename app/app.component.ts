import { Component } from "@angular/core";

import { userMapper } from "./core/user.mapper";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {

   user: any = userMapper.createRecord();
 }
