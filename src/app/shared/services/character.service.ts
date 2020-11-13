import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Character } from '../models/Character';
import { Frame } from '../models/Frame';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {

  private readonly baseUrl = `${ environment.apiUrl }/character/`;

  constructor(private $http: HttpClient) {
  }

  public getAllCharacters(nextUrl?: string): Observable<Frame<Character>> {
    return this.$http.get<Frame<Character>>(`${ nextUrl || this.baseUrl }`);
  }

  public getCharacterById(id: number): Observable<Character> {
    return this.$http.get<Character>(`${ this.baseUrl }${ id }`);
  }
}
