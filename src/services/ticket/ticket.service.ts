import { EventEmitter, Injectable, Output } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { STUDENTS_MOCK, TICKETS_MOCKED } from '../../mocks/tickets.mock';
import { BehaviorSubject } from 'rxjs/index';
import { Student } from 'src/models/student';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  public ticketList: Ticket[]  = TICKETS_MOCKED;
  public studentList: Student[]  = STUDENTS_MOCK;

  /**
   * Observable which contains the list of the tickets.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public tickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject(this.ticketList);
 
  public student$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);

  constructor() {
  }

  // addStudent(student: Student)
  // {

  //   this.studentList.push(student);
  //   this.student$.next(this.studentList);
  // }

  addTicket(ticket: Ticket) {
     
    this.ticketList.push(ticket);
    this.tickets$.next(this.ticketList);

  
    

    // You need here to update the list of ticket and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
  }
  archivedTicket(ticket: Ticket) {
    ticket.archived = true;
    this.tickets$.next(this.ticketList);
  }

//    deleteTicket(ticket: Ticket) {
//    this.ticketList = this.ticketList.filter(t => t!== ticket);
//         //this.ticketList.splice(ticket,1);
//     this.tickets$.next(this.ticketList);
// }
 
UpdateTicket(etat: boolean) {
  const temp = this.ticketList.filter(t => t.archived === etat);
  this.tickets$.next(temp);
}
 

}
