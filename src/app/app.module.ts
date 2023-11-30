import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TicketComponent, TicketFormComponent, TicketListComponent } from './tickets';
import { TicketService } from '../services/ticket/ticket.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule} from '@angular/common/http';
import { StudentFormComponent } from './students/student-form/student-form.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { StudentComponent } from './students/student/student.component';
import { AppRoutingModule } from './app-routing.module';
import { TicketIndexComponent } from './tickets/ticket-index/ticket-index.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketFormComponent,
    TicketListComponent,
    HeaderComponent,
    StudentFormComponent,
    StudentListComponent,
    StudentComponent,
    TicketIndexComponent // All the components needs to be declared
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
     // Import all dependencies
  ],
  providers: [TicketService], // All the services need to be provided
  bootstrap: [AppComponent]
})
export class AppModule {
}
