import { Component, OnInit } from '@angular/core';
import { EmployeeCertificatePlaceholder } from '../../../model/EmployeeCertificatePlaceholder';
import { DashboardCertificationPlaceholderService } from '../../../services/dashboardcertificationplaceholder.service';

@Component({
  selector: 'app-certification-placeholder',
  templateUrl: './certification-placeholder.component.html',
  styleUrls: ['./certification-placeholder.component.css']
})
export class CertificationPlaceholderComponent implements OnInit {

  employeeCertificatePlaceholder: EmployeeCertificatePlaceholder[];
  subtitle1 = 'Certifications Received';
  subtitle2 = 'Certifications Requested';

  errorMessage: any;

  constructor(private certificationPlaceholderService: DashboardCertificationPlaceholderService) { }

  ngOnInit() {

    this.certificationPlaceholderService.getCertificatePlaceholder()
      .subscribe(employeeCertificatePlaceholder => {
        this.employeeCertificatePlaceholder = employeeCertificatePlaceholder
        this.errorMessage = 'Hurry Up! Upload your First Certification';
      },
        (error: any) => {
          this.errorMessage = <any>error;
        },
        () => { }
    );
  }

  }


