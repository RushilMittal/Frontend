import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { EmployeeSkillPlaceholder } from '../model/EmployeeSkillPlaceholder';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashBoardSkillPlaceHolderService {

    url = '../assets/skillPlaceholder.json';

    constructor(private http: HttpClient) { }

    getemployeeSkillPlaceholder(): Observable<EmployeeSkillPlaceholder> {

        return this.http.get<EmployeeSkillPlaceholder>(this.url);
    }

}
