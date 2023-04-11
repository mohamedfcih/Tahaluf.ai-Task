import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputsService {
  textBox = {
    fontColor: 'red',
    fontSize: '20px',
    placeholder: 'Dynamic-placeholder',
    name: 'Dynamic-name',
    label: 'Dynamic label',
  };

  textarea = {
    fontColor: 'red',
    fontSize: '20px',
    placeholder: 'Dynamic-placeholder',
    name: 'Dynamic-name',
    label: 'Dynamic label',
    cols: '50',
  };

  selectBox = {
    fontColor: 'red',
    fontSize: '20px',
    name: 'Dynamic-name',
    label: 'Dynamic label',
  };

  button = {
    fontColor: 'red',
    fontSize: '20px',
    name: 'button-name',
    title: 'Dynamic button title',
    bgColor: 'green',
  };

  constructor() { }
  
}
