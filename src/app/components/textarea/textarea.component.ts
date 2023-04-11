import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Textarea } from 'src/app/models/input.model';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
})
export class TextareaComponent {
  @Input() inputValue!: Textarea;
  @Output() textareaValue = new EventEmitter<Textarea>();

  emitValues() {
    this.textareaValue.emit(this.inputValue);
  }
}
