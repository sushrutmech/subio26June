import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SuccessGoal } from 'src/app/shared/interfaces/success-goal';
import { KeyToSuccessService } from "../../../modules/key-to-success/key-to-success.service"

@Component({
  selector: 'app-key-success-container',
  templateUrl: './key-success-container.component.html',
  styleUrls: ['./key-success-container.component.css']
})
export class KeySuccessContainerComponent implements OnInit {

  isDataLoaded: boolean = false;
  successGoalList: SuccessGoal[] = [];
  selectedSuccessGoal!: SuccessGoal;

  constructor(
    private spinner: NgxSpinnerService,
    private myKeysToSuccessService: KeyToSuccessService,


  ) { 
    console.log("****" ,this.getSuccessGoalList()) 
     this.myKeysToSuccessService.getGoalList().subscribe(results => {console.log(results)})
  }

  ngOnInit(): void {
    this.getSuccessGoalList();
  }

  getSuccessGoalList() {
    this.spinner.show();
    this.myKeysToSuccessService.getGoalList().subscribe(results => {
      if (results.length > 0) {
        this.successGoalList = results;
        this.selectedSuccessGoal = this.successGoalList[0];
      }
      this.isDataLoaded = true;
      this.spinner.hide();
    });
  }

  setSuccessGoal(item: SuccessGoal) {
    this.selectedSuccessGoal = item;
  }

}
