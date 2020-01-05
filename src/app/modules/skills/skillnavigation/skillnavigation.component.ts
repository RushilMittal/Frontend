import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skillnavigation',
  templateUrl: './skillnavigation.component.html',
  styleUrls: ['./skillnavigation.component.css']
})
export class SkillnavigationComponent implements OnInit {

  closeResult: string;
  subject = 'Skill Portal:- Kindly Add the new Skill in the Skill Portal';
  modalReference: NgbModalRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  // Open default modal
  open(content) {
    this.modalReference = this.modalService.open(content);
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // This function is used in open
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  JoinAndClose() {
    this.modalReference.close();
    }
}
