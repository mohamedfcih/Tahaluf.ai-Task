import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormContainerComponent } from './components/form-container/form-container.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';
import { ButtonComponent } from './components/button/button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormContainerComponent,
    TextBoxComponent,
    TextareaComponent,
    SelectBoxComponent,
    ButtonComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
