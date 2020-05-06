import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DominoComponent } from './domino/domino.component';
import { DominoService } from './core/domino.service';
import { PlayerComponent } from './player/player.component';
import { CardComponent } from './card/card.component';
import { UpsideCardComponent } from './upside-card/upside-card.component';
import { APP_BASE_HREF } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './login/login.component'
import { AlertService } from './core/alert.service';
import { AuthenticationService } from './core/authentication.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    ReactiveFormsModule, 
    AppRoutingModule
  ],
  declarations: [AppComponent, HelloComponent, DominoComponent, PlayerComponent, CardComponent, UpsideCardComponent, LoginComponent],
  bootstrap: [AppComponent],
  providers: [DominoService, { provide: APP_BASE_HREF, useValue: '/angular-gomino' }, CookieService, AlertService, AuthenticationService],
})
export class AppModule { }
