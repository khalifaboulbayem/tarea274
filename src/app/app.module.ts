import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataModule } from '@data/data.module';
import { PatronModule } from '@modules/patron/patron.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataModule,
    PatronModule
  ],

  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
