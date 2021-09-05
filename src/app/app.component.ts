import {Component} from '@angular/core';
import {ListElement} from "./card/card.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  show = false;

  showModal() {
		this.show = true
	}
  removeModal() {
    this.show = false
  }

  onAddTask(element: ListElement) {
    this.ListElements.unshift(element)
  }

  ListElements: ListElement[] = []
}
