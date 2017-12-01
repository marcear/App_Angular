import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.css']
})

export class ListContentComponent {

  @Input() items: any[];
  @Input() icons: any[];
  @Output() onItemClick = new EventEmitter<void>();
  @Output() onItemCheck = new EventEmitter<void>();
  selectedItemId: number = 0;
  checkedItemsId: Array<number> = [];
  
  itemClick(event, id) {
    if (event.target.innerHTML.indexOf("checkbox") == -1){
      this.checkedItemsId = [];
      this.selectedItemId = id;
      this.onItemClick.emit(id);  
    }
  }

  itemCheck(event, id) {
    this.selectedItemId = 0;
    this.checkedItemsId.push(id);
    this.onItemCheck.emit(id);
  }

  isChecked(id) {
    return this.checkedItemsId.includes(id);
  }

  isSelected(id) {
    return (this.selectedItemId == id);
  }

}
