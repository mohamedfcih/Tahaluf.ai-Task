import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputValue, TextBox } from 'src/app/models/input.model';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css'],
})
export class TextBoxComponent {
  @Input() inputValue!: TextBox;
  @Output() textInputValue = new EventEmitter<InputValue>();

  emitValues() {
    this.textInputValue.emit(this.inputValue);
  }
}
