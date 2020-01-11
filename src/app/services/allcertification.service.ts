import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';


import { Certification } from '../model/Certification';
import { baseUrlCertification } from '../baseUrl';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ErrorHandler } from './handleerror.service';
@Injectable()
export class AllCertificationService {

   // private apiRoot = baseUrlCertification;
    url = '../assets/Certification.json';
    constructor (private http: HttpClient,private handler:ErrorHandler) {}

    getAllCertificates(): Observable<Certification[]> {
        //const url = `${this.apiRoot}/all`;
        console.log(this.url);
        return this.http.get<Certification[]>(this.url)
        .pipe(
            catchError(this.handler.handleError)
        );
    }

}
