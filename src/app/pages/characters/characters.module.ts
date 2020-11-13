import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CharactersComponent } from './characters.component';



@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class CharactersModule { }
