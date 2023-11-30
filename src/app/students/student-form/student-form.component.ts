import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from 'src/models/student';
import { StudentService } from 'src/services/ticket/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  public studentForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public studentService: StudentService) {
    //this.ticketService.student$.subscribe((student) => this.STUDENT_LIST = student);
      // Form creation
      this.studentForm = this.formBuilder.group({
        prenom: [''],
        nom: ['']
      });
    }



  ngOnInit() {
  }
  addstudent() {
    const studentToCreate: Student = this.studentForm.getRawValue() as Student;
    this.studentService.addStudent(studentToCreate);
    console.log(studentToCreate);

    
  }
}
