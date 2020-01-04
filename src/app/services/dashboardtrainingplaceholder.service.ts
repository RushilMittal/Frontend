import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Training } from '../model/Training';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class DashboardTrainingPlaceholderService {
    url = '../assets/trainingPlaceholder.json';

    constructor(private http: HttpClient) { }

    gettTrainingData(): Observable<Training[]> {

        return this.http.get<Training[]>(this.url);
    }

}
