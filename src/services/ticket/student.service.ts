import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { STUDENTS_MOCK } from "src/mocks/tickets.mock";
import { Student } from "src/models/student";
import { catchError, map, tap } from 'rxjs/operators';




@Injectable({
    providedIn: 'root'
})
export class StudentService {
    public studentList: Student[]=[];
    public url = 'http://localhost:9428/api/students/'


    
   public student$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);

constructor (public http:HttpClient) {}

getStudent(): Observable<Student[]> { // recup la liste des etudiant de l'api
  return this.http.get<Student[]>(this.url); 
    // .pipe(
    //   catchError(this.handleError<Student[]>('getStuent', []))
    //);
}
enretud(student: Student): Observable<Student> { // recup la liste des etudiant de l'api
  //return this.http.post<Student>(this.url, student);


  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  return this.http.post<Student>(this.url, student);
  
}

    // async getStudent(): Promise<Student[]> {
    //     return await Promise.resolve(this.studentList);
    //     // return await this.httpClient.get<Student[]>(this.apiUrl).toPromise();
    // }

    // async getOneStudent(id: number): Promise<Student> {
    //     return await this.http.get<Student>(this.url + id + '/').toPromise();
    // }

    // async createStudent(student: Student): Promise<Student> {
    //     return await this.http.post<Student>(this.url, student)
    //     .toPromise();
    // }

    // async deleteStudent(id: number): Promise<Student> {
    //     return await this.http.delete<Student>(this.url + id + '/').toPromise();
    // } une connexion nn bloquant tout en mm temp

    // async getStudent(): Promise<Student[]> {
    //     return await Promise.resolve(this.studentList);
    //     // return await this.httpClient.get<Student[]>(this.apiUrl).toPromise();
    // }


private handleError<Student>(operation = 'operation', result?: Student) { //genere une reeur si ya unpb dans les recup des utilisateur
  return (error: any): Observable<Student> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as Student);
  };
}
addStudent(student: Student)
{
  this.studentList.push(student);
  this.student$.next(this.studentList);
}}

