import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/login/register/register.component';
import { ForgetComponent } from './modules/login/forget/forget.component';
import { DashboardLayoutComponent } from './modules/dashboard/dashboard-layout/dashboard-layout.component';
import { DashLayoutComponent } from './modules/dash-layout/dash-layout/dash-layout.component';
import { AllskillComponent } from './modules/skills/allskill/allskill.component';
import { SearchPageComponent } from './modules/skills/search/search-page/search-page.component';
import { SkilldetailComponent } from './modules/skills/skilldetail/skilldetail.component';
import { SkillnavigationComponent } from './modules/skills/skillnavigation/skillnavigation.component';
import { MyskillComponent } from './modules/skills/myskill/myskill.component';
import { SkillgroupComponent } from './modules/skills/skillgroup/skillgroup.component';
import { CertificationNavigationComponent } from './modules/certifications/certification-navigation/certification-navigation.component';
import { MyCertificationComponent } from './modules/certifications/my-certification/my-certification.component';
import { AvailableCertificationsComponent } from './modules/certifications/available-certifications/available-certifications.component';
import { AddCertificationComponent } from './modules/certifications/add-certification/add-certification.component';
import { TrainingsNavigationComponent } from './modules/trainings/trainings-navigation/trainings-navigation.component';
import { MyEnrolledTrainingsComponent } from './modules/trainings/my-enrolled-trainings/my-enrolled-trainings.component';
import { AvailableTrainingsComponent } from './modules/trainings/available-trainings/available-trainings.component';
import { TrainingListComponent } from './modules/trainings/training-list/training-list.component';
import { TrainingCalenderComponent } from './modules/trainings/training-calender/training-calender.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  { path: 'register',
    component: RegisterComponent
  },
  { path: 'forget',
    component: ForgetComponent
  },
  {
    path: '',
    component: DashLayoutComponent,
    // canActivate: [AuthorizationGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardLayoutComponent
      },
      {
        path: 'skills',
        component: SkillnavigationComponent,
        children: [
          {
            path: '',
            redirectTo: 'myskill',
            pathMatch: 'full'
          },
          {
            path: 'skillgroup',
            component: SkillgroupComponent
          },
          {
            path: 'myskill',
            component: MyskillComponent
          },
          {
            path: 'allskill',
            component: AllskillComponent
          },
          {
            path: 'searchskillPage',
            component: SearchPageComponent
          },
          {
            path: 'skillgroup/explore/:id',
            component: SkilldetailComponent
          }
        ]
      },
      {
        path: 'certifications',
        component: CertificationNavigationComponent,
        children: [
          {
            path: '',
            redirectTo: 'mycertifications',
            pathMatch: 'full'
          },
          {
            path: 'mycertifications',
            component: MyCertificationComponent
          },
          {
            path: 'availablecertifications',
            component: AvailableCertificationsComponent
          },
          {
            path: 'availablecertifications/add',
            component: AddCertificationComponent
          }
        ]
      },
      {
        path: 'trainings',
        component: TrainingsNavigationComponent,
        children: [
          {
            path: '',
            redirectTo: 'myenrolledtrainings',
            pathMatch: 'full'
          },
          {
            path: 'myenrolledtrainings',
            component: MyEnrolledTrainingsComponent,
            children: [
              {
                path: '',
                redirectTo: 'traininglist',
                pathMatch: 'full'

              },
              {
                path: 'traininglist',
                component: TrainingListComponent

              },
              {
                path: 'trainingcalender',
                component: TrainingCalenderComponent
              }
            ]

          },
          {
            path: 'availabletrainings',
            component: AvailableTrainingsComponent
          }
        ]
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },

    ]

  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // { enableTracing: true } // <-- debugging purposes only
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
