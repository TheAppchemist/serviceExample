import { Injectable } from "@angular/core";
import {Http} from "@angular/http"
import 'rxjs'

@Injectable()
export class StudentService {
    constructor(private http: Http) {

    }

    numbers(){
        return [1,2,3,4,5,6].map(number => {
            return number * 2
        })
    }

    students() {
        return this.http.get('http://qweeqi.appchemy.co.za/users').map(data => {
            return data.json()
        })
    }

    studentsWithPromise() {
        return this.http.get('http://qweeqi.appchemy.co.za/usersa').toPromise().then(data => {
            return data.json()
        })
    }
}