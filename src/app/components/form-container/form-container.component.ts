import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  Button,
  TextBox,
  Textarea,
  selectBox,
} from 'src/app/models/input.model';
import { ModalComponent } from '../modal/modal.component';
import { InputsService } from 'src/app/services/inputs.service';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css'],
})
export class FormContainerComponent implements OnInit {
  activeComponent: any;
  textBox!: TextBox;
  selectBox!: selectBox;
  textarea!: Textarea;
  button!: Button;

  constructor(
    private modalService: NgbModal,
    private inputsService: InputsService
  ) {}

  ngOnInit(): void {
    this.getvalues();
  }

  showData(event: any, component: any) {
    const selectedInput = event;
    this.open(selectedInput, component);
  }

  public open(selectedInput: any, component: any) {
    this.activeComponent = component;
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.InputObj = selectedInput;
    modalRef.result.then((res) => {
      this.activeComponent.inputValue = res;
    });
  }

  //this function is a dummy function instead of the BE response
  getvalues() {
    this.textBox = this.inputsService.textBox;
    this.selectBox = this.inputsService.selectBox;
    this.button = this.inputsService.button;
    this.textarea = this.inputsService.textarea;
  }
}
