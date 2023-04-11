import { Component, EventEmitter, Input, Output } from '@angular/core';
import { selectBox } from 'src/app/models/input.model';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent {
  @Input() inputValue!: selectBox;
  @Output() selectBoxValue = new EventEmitter<selectBox>();

  emitValues() {
    this.selectBoxValue.emit(this.inputValue);
  }
}
