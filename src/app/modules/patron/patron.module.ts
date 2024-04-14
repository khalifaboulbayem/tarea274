import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { PatronService } from '@data/services/api/patron.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    //CreateComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
   // CreateComponent,
    IndexComponent
  ],
  providers: [
    PatronService
  ],
})
export class PatronModule { }
