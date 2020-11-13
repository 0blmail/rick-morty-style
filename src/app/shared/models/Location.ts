import { Label } from './Label';

export interface Location extends Label {
  type: string;
  dimension: string;
  residents: string[];
}
