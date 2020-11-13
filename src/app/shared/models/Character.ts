import { Label } from './Label';

export interface Character extends Label {
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
}
