import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { IvyCarouselModule } from "angular-responsive-carousel";

@NgModule({
  imports: [BrowserModule, FormsModule, IvyCarouselModule],
  declarations: [AppComponent, CarouselComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
