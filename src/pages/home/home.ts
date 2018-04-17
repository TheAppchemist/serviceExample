import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StudentService } from '../../services/student-service';
import {Observable} from 'rxjs'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  students

  constructor(public navCtrl: NavController, private studentService: StudentService) {
    this.studentService.students().subscribe((students: any[]) => { 
      this.students = students.filter(student => {
        return student.name != 'Melvin Musehani'
      })
    }, err => {
      console.log('Oops guys')
    }, () => {

    })

    // this.studentService.studentsWithPromise().then(students => {
    //   this.students = students
    // }).catch(err => {
    //   console.log('Oops guys')
    //   console.log(err)
    // })
  }

}
