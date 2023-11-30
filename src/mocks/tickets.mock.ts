import { Student } from 'src/models/student';
import { Ticket } from '../models/ticket';

//import { student } from '../models/ticket';

const dateToday: Date = new Date();
export const STUDENTS_MOCK: Student[] = [
  {
      id: 1,
      nom: 'Patric',
      prenom: 'Paul',
  },


  {   id: 2,
      nom: 'Louis',
      prenom: 'Maeva',
     
    },

];
export const TICKETS_MOCKED: Ticket[] = [
  {
    "title": 'M1',
    "description": '',
    "date": dateToday,
    "student": STUDENTS_MOCK[0],
    //"student": '',
    "major": 'SI',
   
  },
  {
    "title": 'SI5 in Paris',
    "description": 'Description du voyage',
    "date": dateToday,
    "student": STUDENTS_MOCK [1],
    //"student": '',
    "major": 'GE',
  
  },
 
];
 