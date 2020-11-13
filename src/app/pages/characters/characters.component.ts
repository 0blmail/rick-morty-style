import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../shared/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: [ './characters.component.scss' ],
})
export class CharactersComponent implements OnInit {

  constructor(private characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe((c) => {
      console.log(c);
    });
  }

}
