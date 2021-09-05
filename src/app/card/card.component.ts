import {Component, Input} from '@angular/core';

export interface ListElement {
  id: number,
  like: number,
  repost: number,
  subscribe: number
}

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input()
  elements: ListElement[] = []
}
