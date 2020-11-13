import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CharacterService } from './services/character.service';
import { LocationService } from './services/location.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    LocationService,
    CharacterService,
  ],
})
export class SharedModule {
}
