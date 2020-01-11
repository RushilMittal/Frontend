import { Component, OnInit } from '@angular/core';
import { EmployeeCertificate } from '../../../model/EmployeeCertification';
import { MyCertificationService } from '../../../services/mycertification.service';

@Component({
  selector: 'app-my-certification',
  templateUrl: './my-certification.component.html',
  styleUrls: ['./my-certification.component.css']
})
export class MyCertificationComponent implements OnInit {
  errorMessage: any;
  empCertification: EmployeeCertificate[];
  showSpinner = false;

  constructor(private myCertificateService: MyCertificationService) { }

  ngOnInit() {

    this.showSpinner = true;
    this.myCertificateService.getEmployeeCertification()
        .subscribe( empCertification => {
            this.empCertification = empCertification;
            this.errorMessage = 'Hurry Up! Upload your First Certification';
        },
        error => {
          this.errorMessage = <any>error;
          this.showSpinner = false;
        },
        () => {
          this.showSpinner = false
        });
  }

}
