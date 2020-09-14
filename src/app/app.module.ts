import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TypeComponent } from './type/type.component';
import { RegularComponent } from './regular/regular.component';
import { PreviewComponent } from './preview/preview.component';
import { TargetComponent } from './target/target.component';
import { TargetSecondComponent } from './target-second/target-second.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TypeComponent,
    RegularComponent,
    PreviewComponent,
    TargetComponent,
    TargetSecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
