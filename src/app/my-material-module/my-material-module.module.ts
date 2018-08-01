import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatToolbarModule,MatInputModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule
  ],
  declarations: [],
  exports: [MatCardModule, MatToolbarModule, MatInputModule]
})
export class MyMaterialModuleModule { }
