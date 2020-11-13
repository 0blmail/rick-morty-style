import { Component, Input, OnInit } from '@angular/core';
import { Label } from '../../models/Label';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: [ './display-card.component.scss' ],
})
export class DisplayCardComponent implements OnInit {

  @Input()
  entity: Label;

  constructor() {
  }

  ngOnInit(): void {
  }

}
