import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CharacterService } from './services/character.service';
import { LocationService } from './services/location.service';


@NgModule({
  declarations: [ NotFoundComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    LocationService,
    CharacterService,
  ],
})
export class SharedModule {
}
