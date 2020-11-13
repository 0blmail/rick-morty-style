import { Component, OnInit } from '@angular/core';
import { Character } from '../../shared/models/Character';
import { Frame } from '../../shared/models/Frame';
import { CharacterService } from '../../shared/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: [ './characters.component.scss' ],
})
export class CharactersComponent implements OnInit {

  characters: Frame<Character>;

  constructor(private characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.characterService.getAllCharacters()
        .subscribe((characters: Frame<Character>) => this.characters = characters);
  }

}
