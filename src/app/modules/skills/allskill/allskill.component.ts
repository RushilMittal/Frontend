import { Component, OnInit, Input } from '@angular/core';
import { AllSkillService } from '../../../services/allskillservice.service';
import { SkillGroup } from '../../../model/SkillGroup';

@Component({
  selector: 'app-allskill',
  templateUrl: './allskill.component.html',
  styleUrls: ['./allskill.component.css']
})
export class AllskillComponent implements OnInit {

  skillGroup: SkillGroup[];
  errorMessage: any;
  showSpinner = false;

  constructor(private allSkillService: AllSkillService) { }

  ngOnInit() {
    this.getAllSkill();
  }

  getAllSkill(){
    this.showSpinner = true;
    this.allSkillService.getAllSkillsData()
      .subscribe(skillGroupResponse => {
        console.log(skillGroupResponse);
        this.skillGroup = skillGroupResponse;
        this.errorMessage = 'Hurry Up! Rate your First Skill';
      },
      error => {
        this.errorMessage = <any>error;
        this.showSpinner = false;
      },
      () => {
        this.showSpinner = false
      }
      );
  }
}
