import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from 'src/app/models/input.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() inputValue!: Button;
  @Output() buttonValue = new EventEmitter<Button>();

  emitValues() {
    this.buttonValue.emit(this.inputValue);
  }
}
