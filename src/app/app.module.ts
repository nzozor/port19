import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeadlinePanelComponent } from "./headline-panel/headline-panel.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [AppComponent, HeadlinePanelComponent, AboutMeComponent],
  imports: [BrowserModule, FontAwesomeModule, BrowserAnimationsModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
