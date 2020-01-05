import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Skill } from '../model/Skill';
import { baseUrlSkill } from '../baseUrl';
import { HttpClient } from '@angular/common/http';
import { SubSkill } from '../model/SubSkill';
import { catchError } from 'rxjs/operators';
import { ErrorHandler } from './handleerror.service';
import { SkillGroup } from '../model/SkillGroup';

@Injectable()
export class AllSkillService {

  //private apiRoot = baseUrlSkill;
  url = '../assets/getallskillgroups.json';

  constructor(private http: HttpClient,
    private handler: ErrorHandler) { }

  getAllSkillsData() :Observable<SkillGroup[]> {
    //const url = this.apiRoot + '/getallskills';
    return this.http.get<SkillGroup[]>(this.url)
      .pipe(
        catchError(this.handler.handleError)
      );;

  }


  // getAllSkill(): Observable<Skill> {
  //   const url = `${this.apiRoot}/all`;
  //   return this.http.get(url)
  //     .pipe(
  //       catchError(this.handler.handleError)
  //     );
  // }

  // Getting One modelSkill by providing SkillId.
  // getSkillById(skillId: string): Observable<Skill> {
  //   const url = `${this.apiRoot}/getBySkillId?skillId=${skillId}`;
  //   return this.http.get(url)
  //     .pipe(
  //       catchError(this.handler.handleError)
  //     );
  // }

  // getSkillByName(skillName: string): Observable<Skill> {
  //   const url = `${this.apiRoot}/getBySkillName?skillName=${skillName}`;
  //   return this.http.get(url)
  //     .pipe(
  //       catchError(this.handler.handleError)
  //     );
  // }


}
