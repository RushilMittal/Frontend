import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here

import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/login/register/register.component';
import { ForgetComponent } from './modules/login/forget/forget.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardLayoutComponent } from './modules/dashboard/dashboard-layout/dashboard-layout.component';
import { DashLayoutComponent } from './modules/dash-layout/dash-layout/dash-layout.component';
import { HttpModule } from '@angular/http';
import { GlobalSearchListComponent } from './modules/dash-layout/global-search-list/global-search-list.component';

import { CertificationNavigationComponent } from './modules/certifications/certification-navigation/certification-navigation.component';
import { MyCertificationComponent } from './modules/certifications/my-certification/my-certification.component';
import { AvailableCertificationsComponent } from './modules/certifications/available-certifications/available-certifications.component';
import { AddCertificationComponent } from './modules/certifications/add-certification/add-certification.component';
import { NewCertificationComponent } from './modules/certifications/new-certification/new-certification.component';
import { NotificationMarqueeComponent } from './modules/dashboard/notification-marquee/notification-marquee.component';
import { PlaceholderbadgeComponent } from './modules/dashboard/placeholderbadge/placeholderbadge.component';
import { SkillsPlaceholderComponent } from './modules/dashboard/skills-placeholder/skills-placeholder.component';
import { CertificationPlaceholderComponent } from './modules/dashboard/certification-placeholder/certification-placeholder.component';
import { TrainingPlaceholderComponent } from './modules/dashboard/training-placeholder/training-placeholder.component';

import { SkillnavigationComponent } from './modules/skills/skillnavigation/skillnavigation.component';
import { AllskillComponent } from './modules/skills/allskill/allskill.component';
import { MyskillComponent } from './modules/skills/myskill/myskill.component';
import { SkilldetailComponent } from './modules/skills/skilldetail/skilldetail.component';
import { RatingComponent } from './modules/skills/rating/rating.component';
import { SearchListComponent } from './modules/skills/search/search-list/search-list.component';
import { SearchPageComponent } from './modules/skills/search/search-page/search-page.component';

import { TrainingsNavigationComponent } from './modules/trainings/trainings-navigation/trainings-navigation.component';
import { MyEnrolledTrainingsComponent } from './modules/trainings/my-enrolled-trainings/my-enrolled-trainings.component';
import { AvailableTrainingsComponent } from './modules/trainings/available-trainings/available-trainings.component';
import { SkillgroupComponent } from './modules/skills/skillgroup/skillgroup.component';
import { SearchTransformPipe } from './modules/search-transform.pipe';
import { ErrorHandler } from './services/handleerror.service';

import { TrainingListPipe } from './modules/trainings/training-list/training-list-pipe.pipe';
import { AddTrainingComponent } from './modules/trainings/add-training/add-training.component';
import { CalendarModule } from 'angular-calendar';
import { TrainingListComponent } from './modules/trainings/training-list/training-list.component';
import { TrainingCalenderComponent } from './modules/trainings/training-calender/training-calender.component';
import { AvailableTrainingPipe } from './modules/trainings/available-trainings/available-trainings-pipe.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Ng2IziToastModule } from 'ng2-izitoast';
import { ToastService } from './services/toast.service';

import { DashboardTrainingPlaceholderService } from './services/dashboardtrainingplaceholder.service';
import { DashBoardSkillPlaceHolderService } from './services/dashboardskillplaceholder.service';
import { DashboardCertificationPlaceholderService } from './services/dashboardcertificationplaceholder.service';

import { MySkillService } from './services/myskillservice.service';
import { SkillGroupService } from './services/SkillGroupService.service';
import { SearchService } from './services/search.service';
import { AllSkillService } from './services/allskillservice.service';
import { MySubSkillService } from './services/mysubskillservice.service';
import { FileUploadComponent } from './modules/shared/file-upload/file-upload.component';
import { SendEmailComponent } from './modules/shared/send-email/send-email.component';

import { AllCertificationService } from './services/allcertification.service';
import { AddNewCertificateService } from './services/addnewcertificate.service';
import { NewCertificationService } from './services/newcertification.service';
import { MyCertificationService } from './services/mycertification.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
    DashLayoutComponent,
    GlobalSearchListComponent,
    PageNotFoundComponent,
    SearchTransformPipe,

    // for certifications feature
    CertificationNavigationComponent,
    MyCertificationComponent,
    AvailableCertificationsComponent,
    AddCertificationComponent,
    NewCertificationComponent,

    // for DashBoard feature
    NotificationMarqueeComponent,
    PlaceholderbadgeComponent,
    SkillsPlaceholderComponent,
    CertificationPlaceholderComponent,
    DashboardLayoutComponent,
    TrainingPlaceholderComponent,

    // for Skills feature
    SkillnavigationComponent,
    SkillgroupComponent,
    AllskillComponent,
    MyskillComponent,
    SkilldetailComponent,
    RatingComponent,
    SearchListComponent,
    SearchPageComponent,
    LoginComponent,

    // for training module
    TrainingsNavigationComponent,
    MyEnrolledTrainingsComponent,
    AvailableTrainingsComponent,

    TrainingListComponent,
    TrainingCalenderComponent,
    TrainingListPipe,
    AddTrainingComponent,
    AvailableTrainingPipe,
    FileUploadComponent,
    SendEmailComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CalendarModule,
    HttpModule,
    Ng2IziToastModule

  ],
  exports: [
    RatingComponent,
    MyskillComponent
  ],
  providers: [
    // Providers for certification Services
    AllCertificationService,
    AddNewCertificateService,
    NewCertificationService,
    MyCertificationService,
    DashboardTrainingPlaceholderService,
    DashBoardSkillPlaceHolderService,
    DashboardCertificationPlaceholderService,
    // Providers for Skills Services
    MySkillService,
    SkillGroupService,
    SearchService,
    AllSkillService,
    MySubSkillService,
    // For displaying the toast
    ToastService,
    // testing purpose
    ErrorHandler
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {}
}
