import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { GtagModule } from 'angular-gtag';
import { NgModule } from '@angular/core';
import { PageComponent } from './page/page.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent, PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GtagModule.forRoot(environment.gaConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
