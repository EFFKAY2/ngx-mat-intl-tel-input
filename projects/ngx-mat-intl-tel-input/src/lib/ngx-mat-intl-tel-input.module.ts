import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips'
import { MatIconModule } from '@angular/material/icon';
import { SearchPipe } from './search.pipe';
import { NgxMatItlTelChipInputComponent } from './ngx-mat-itl-tel-chip-input/ngx-mat-itl-tel-chip-input.component';
import { NgxMatItlTelInputComponent } from './ngx-mat-itl-tel-input/ngx-mat-itl-tel-input.component';
import { NgxMatItlCountrySelectComponent } from './ngx-mat-itl-country-select/ngx-mat-itl-country-select.component';
import { TeleTelInputComponent } from './tele-tel-input/tele-tel-input.component';

@NgModule({
  declarations: [
    NgxMatItlTelInputComponent,
    NgxMatItlTelChipInputComponent,
    SearchPipe,
    NgxMatItlCountrySelectComponent,
    TeleTelInputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatMenuModule,
    MatChipsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ],
  exports: [NgxMatItlTelInputComponent, NgxMatItlTelChipInputComponent, NgxMatItlCountrySelectComponent]
})
export class NgxMatItlTelInputModule { }
