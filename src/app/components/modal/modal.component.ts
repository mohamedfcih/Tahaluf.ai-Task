import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  form!: FormGroup;
  InputObj!: any;
  inputProps: string[] = [];

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    const inputDataObj = {} as any;
    for (const prop of Object.keys(this.InputObj)) {
      inputDataObj[prop] = new FormControl(this.InputObj[prop]);
      this.inputProps.push(prop);
    }
    this.form = new FormGroup(inputDataObj);
  }

  submit() {
    this.activeModal.close(this.form.value);
  }
}
