import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'To Do List';
  items: Array<Object> = [];

  addItem(input:HTMLInputElement):void {
    let newItem: Object = {
      title: input.value,
      complete: false
    }

    this.items.push(newItem);
  }

  removeItem(index):void {
    this.items.splice(index, 1);
  }
}
