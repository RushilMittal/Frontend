import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { SkillGroup } from '../model/SkillGroup';
import { baseUrlSkill } from '../baseUrl';
import { catchError } from 'rxjs/operators';
// import { ErrorHandler } from './handleerror.service';
@Injectable()
export class SkillGroupService {
    url = '../assets/getallskillgroups.json';
    constructor(private httpClient: HttpClient) {}
    getData():Observable<SkillGroup> {
       return this.httpClient.get<SkillGroup>(this.url)
       .pipe(
        // catchError(this.handler.handleError)
       );

    }
}
