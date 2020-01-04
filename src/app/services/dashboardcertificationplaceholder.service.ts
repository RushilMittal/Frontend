import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { EmployeeCertificatePlaceholder } from '../model/EmployeeCertificatePlaceholder';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DashboardCertificationPlaceholderService {

  url = '../assets/certificatePlaceholder.json';

  constructor(private http: HttpClient) { }

  getCertificatePlaceholder(): Observable<EmployeeCertificatePlaceholder[]> {

    return this.http.get<EmployeeCertificatePlaceholder[]>(this.url)
  }

}
