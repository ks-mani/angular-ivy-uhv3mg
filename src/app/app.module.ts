import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { EntireScreenDiv } from "./directives/entire-screen-div/entire-screen-div.directive";
import { DivSizeDirective } from "./directives/div-size/div-size.directive";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, EntireScreenDiv, DivSizeDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
