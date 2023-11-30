import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../../../models/ticket';
import { NgIf } from '@angular/common';
import { tick } from '@angular/core/testing';
import  { TicketService } from '../../../services/ticket/ticket.service';

@Component({
  
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
   
})
export class TicketComponent implements OnInit {

  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */
  @Input()
  ticket!: Ticket;

  @Output()
  ticketHasBeenSelected: EventEmitter<boolean> = new EventEmitter<boolean>();
  // @Output()
  // ticketHasBeenDeleted: EventEmitter<Ticket> = new EventEmitter<Ticket>();
  @Output()
  ticketHasBeenArchived: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  @Output()
  ticketHasBeenDeleted: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  constructor(public ticketService: TicketService) {
  }

  ngOnInit() {
  }

  selectTicket() {
    this.ticketHasBeenSelected.emit(true);
  }


  deleteTicket() {
   
    this.ticketHasBeenDeleted.emit(this.ticket);
     console.log(this.ticket);
  
 }
 archivedTicket() {
    this.ticketHasBeenArchived.emit(this.ticket);
   //console.log(this.ticket);
   }

}
