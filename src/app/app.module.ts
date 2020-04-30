import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Header/header.component';
import { NavbarComponent } from './components/Navbar/navbar.component';
import { RectForumComponent } from './components/RectForum/rectforum.component';
import { TarjetasComponent } from './components/Tarjetas/tarjetas.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    RectForumComponent,
    TarjetasComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
