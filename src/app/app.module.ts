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

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule,
  RouterModule.forRoot([
      { path: '', component: DominoComponent },
    ]) ],
  declarations: [ AppComponent, HelloComponent, DominoComponent, PlayerComponent, CardComponent, UpsideCardComponent ],
  bootstrap:    [ DominoComponent ],
  providers: [DominoService],
})
export class AppModule { }
