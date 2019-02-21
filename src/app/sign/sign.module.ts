import { NgModule } from '@angular/core';
import { SignComponent } from './sign.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SignComponent],
  imports: [CommonModule],
  exports: [SignComponent]
})
export class SignModule {}
