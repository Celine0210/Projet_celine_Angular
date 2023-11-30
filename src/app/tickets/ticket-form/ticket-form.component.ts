import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';
import { Major } from '../../../models/major';
import { Student } from '../../../models/student';
import { STUDENTS_MOCK } from 'src/mocks/tickets.mock';
import { StudentService } from 'src/services/ticket/student.service';


@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)
  /**
   * TicketForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms
   */
  public ticketForm: FormGroup;
  public FILIERE_LIST: string [] = Object.values(Major);
  public STUDENT_LIST: Student [] = [];

  constructor(public formBuilder: FormBuilder, public ticketService: TicketService, public studentService: StudentService) {
  //this.ticketService.student$.subscribe((student) => this.STUDENT_LIST = student);
    // Form creation
    this.ticketForm = this.formBuilder.group({
      title: [''],
      description: [''],
      major: [''],
      studentID: ['']
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  ngOnInit() {
    // this.studentService.student$.subscribe((student) => {
    //   this.STUDENT_LIST = student;
    //   this.studentService.student$.next(this.STUDENT_LIST);

    // });
    this.studentService.getStudent().subscribe((student) => {
      this.STUDENT_LIST = student;
      this.studentService.student$.next(this.STUDENT_LIST);
    });
  }

  addTicket() {
    const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;
    ticketToCreate.date = new Date();
    const studentID = this.ticketForm.get('studentID')!.value;
    ticketToCreate.student = this.STUDENT_LIST.find(student => student.id == studentID);
    console.log(ticketToCreate);
    ticketToCreate.archived = false;
    console.log(this.STUDENT_LIST);
    this.ticketService.addTicket(ticketToCreate);    
  }
}
