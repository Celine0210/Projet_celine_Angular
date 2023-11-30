import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './students/student/student.component';
import { TicketFormComponent } from './tickets/ticket-form';
import { StudentFormComponent } from './students/student-form/student-form.component';
import { TicketIndexComponent } from './tickets/ticket-index/ticket-index.component';

const routes: Routes = [
  { path: 'students', component: StudentComponent },
  { path: 'tickets', component: TicketIndexComponent},
  // Ajoutez d'autres routes si nécessaire
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
