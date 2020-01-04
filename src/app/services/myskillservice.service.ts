import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EmployeeSkill } from '../model/EmployeeSkill';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { httpOptions } from '../httpheaders';


@Injectable()
export class MySkillService {
    // Skill Url for fetching the skills
    //private apiRoot = baseUrlSkill;
    url = '../assets/EmployeeSkill.json';
    constructor(private http: HttpClient) { }
    /*
    * Function used to Get all the Employee Skills.
    */
    getEmployeeSkills(): Observable<EmployeeSkill[]> {

        // const url = `${this.apiRoot}/getEmployeeSkills`;
        // console.log(url);

        return this.http.get<EmployeeSkill[]>(this.url)
    }

    saveEmployeeSkill(employeeSkill: EmployeeSkill): Observable<EmployeeSkill> {

        let toReturn;
        if (employeeSkill) {
            toReturn = this.addEmployeeSkill(employeeSkill);
        }
        else {
            console.log("Employee SKill not present");
        }
        return toReturn;

    }

    private addEmployeeSkill(employeeSkill: EmployeeSkill): Observable<EmployeeSkill> {

        //const url = `${this.apiRoot}/add?subSkillId=${employeeSkill.subSkill.id}&rating=${employeeSkill.rating}`;
        //console.log(url);
        return this.http.post<EmployeeSkill>(this.url, employeeSkill,httpOptions)

    }
}
