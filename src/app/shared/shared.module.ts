import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CharacterService } from './services/character.service';
import { LocationService } from './services/location.service';
import { DisplayCardComponent } from './components/display-card/display-card.component';


@NgModule({
  declarations: [ NotFoundComponent, DisplayCardComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [
    LocationService,
    CharacterService,
  ],
  exports: [
    DisplayCardComponent,
  ],
})
export class SharedModule {
}
