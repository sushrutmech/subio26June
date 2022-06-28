import { Component, OnInit } from '@angular/core';
import { SuccessGoal } from 'src/app/shared/interfaces/success-goal';
import { KeyToSuccessService } from 'src/app/modules/key-to-success/key-to-success.service'
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/appServices/auth.service';


@Component({
  selector: 'app-key-to-success-c',
  templateUrl: './key-to-success-c.component.html',
  styleUrls: ['./key-to-success-c.component.css']
})
export class KeyToSuccessCComponent implements OnInit {

  isDataLoaded: boolean = false;
  successGoalList: SuccessGoal[] = [];
  selectedSuccessGoal!: SuccessGoal;

  constructor(
    private myKeysToSuccessService: KeyToSuccessService,
    private spinner: NgxSpinnerService,
    private auth:AuthService
  ) {
     console.log("keyto c is loaded" ,this.myKeysToSuccessService.getGoalList())
     
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
