import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TodosComponent } from './todos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ], exports: [TodosComponent]
})
export class TodosModule { }
