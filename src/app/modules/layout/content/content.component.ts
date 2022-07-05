import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SuccessGoal } from 'src/app/shared/interfaces/success-goal';
import { KeyToSuccessService } from '../../key-to-success/key-to-success.service';
import * as moment from 'moment';
import { Subscription, timer } from 'rxjs';
import { ProgramContentTypes } from '../../../shared/constants/program-content-types';
import { UserProgramContent, UserProgramInstance } from '../../../shared/interfaces/home-content';
import { HomeService } from '../home.service';

import { AuthService} from '../../../appServices/auth.service'
import { User } from 'src/app/shared/interfaces/user';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  isDataLoaded: boolean = false;
  successGoalList: SuccessGoal[] = [];
  selectedSuccessGoal!: SuccessGoal;

  programInstance!: UserProgramInstance;
  programContents!: UserProgramContent[];
 
  hasData: boolean = false;
  isWatchVideo: boolean = false;
  isJoinAllowed: boolean = false;
  nextVideoIndex: number = -1;
  selectedVideoIndex: number = -1;
  timeSubscription?: Subscription;
  contentType = ProgramContentTypes;
  userSession!: User;


  i!: number
  allGoalData: any
  teamGoalList: any = []
  MyGoalList: any = []
  BusinessGoalList: any = []

  constructor(
    private homeService: HomeService,
    private spinner: NgxSpinnerService,
    private authService: AuthService,
    private myKeysToSuccessService: KeyToSuccessService,
    
  ) { 

    this.userSession = authService.userSession.user;
  
  }

  ngOnInit(): void {
    this.callHomeContentAPI();
    this.getSuccessGoalList();
    this.getBusinessGoalList();
    this.getMyGoalList();
    this.getTeamGoakList();
  }

  ngOnDestroy(): void {
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }

  callHomeContentAPI() {
    this.spinner.show();
    this.homeService.getHomeContent().subscribe(results => {
      if (results.userProgramContent.length > 0 && results.userProgramInstance.length > 0) {
        this.programInstance = results.userProgramInstance[0];
        this.programContents = results.userProgramContent;
        this.nextVideoIndex = this.programContents.findIndex(x => x.readCount === 0);
        if (this.nextVideoIndex === -1) {
          let allRead = this.programContents.filter(x => x.readCount > 0).length;
          if (allRead === this.programContents.length) {
            this.nextVideoIndex = this.programContents.length + 1;
          }
        }
        this.startTimer();
        this.hasData = true;
      } else {
        this.hasData = false;
      }
      this.isDataLoaded = true;
      this.spinner.hide();
    })
  }


  handleWatchVideo(index: number = -1) {
    this.selectedVideoIndex = index;
    this.isWatchVideo = true;
  }

  handleVideoPlayerClose(dataRefresh: boolean) {
    if (dataRefresh) {
      this.callHomeContentAPI();
    }
    this.isWatchVideo = false;
    this.selectedVideoIndex = -1;
  }

  startTimer() {
    var startTime = moment(this.programInstance.dateStart);
    var endTime = moment(this.programInstance.dateEnd);
    this.validateTimeToJoin(startTime, endTime);
    this.timeSubscription = timer(((60 - Number(moment().format('ss'))) * 1000), 60000).subscribe((t) => {
      this.validateTimeToJoin(startTime, endTime);
    });
  }

  validateTimeToJoin(startTime: moment.Moment, endTime: moment.Moment) {
    var currentTime = moment();
    var isValid = (startTime.diff(currentTime, 'minutes') < 15 && endTime.diff(currentTime, 'minutes') >= 0);
    if (isValid) {
      this.isJoinAllowed = true;
    } else {
      this.isJoinAllowed = false;
    }
  }

  getFormattedDate(date: string) {
    var diff = moment().diff(date, 'minutes');
    let dt = moment().subtract(diff, 'minutes').calendar();
  
    if(moment(dt).format('DD/MM/YYYY').toLowerCase() != 'invalid date') {
      return  moment(dt).format('DD/MM/YYYY');
    } else {
      return dt;
    }    
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




  getTeamGoakList() {
    //this.spinner.show();
    this.myKeysToSuccessService.getGoalList().subscribe(results => {
      this.allGoalData = results

      console.log("**++--//", this.allGoalData)

      this.teamGoalList = this.allGoalData.filter(
        (ele: any) => { return ele.icon == "iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAMAAADyQNAxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA/UExURQAAAN/f397e3tfX19jY2Nra2tnZ2dfX19nZ2djY2NfX19jY2NfX19ra2tra2tnZ2dra2tnZ2dnZ2dnZ2dnZ2d4gwvcAAAAUdFJOUwAQHyAuMD1AUFtgcICPn6+/z9/vYpxEMwAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAUNJREFUOE/tk8lyxCAMRK04BDJsBvT/35rWgjM19ySXdM3hldRAIzPHn4lSdAr5NKD4MLh1TuahlBezdqkzr6C1LVSYM4BgYibQQ6Brd+uSUgWQAMuZRcD238pS0mQDMAVOKRWhb5U55EA0+7osfhqryNFPouA3AzkctEuu0CV0xcooJw5ckqqUfFuVFqD1Vg242V0hywElL3DVe6na9vMOcPeSDkS17qX7mhdLGOgdkRTgBhstM2GQttvA+qbUJ2fzo+NzwVFaqZ2H+XuVnyju/I1H0EqaO39PvD6VwvRviZ65PmB0F1JEnUWoHmxyNBfxJHfhRpYiBHfhk5irhOBTwSHRCL17/OZi0O06bPjPzxCughmACk/MwFwNS15cJ3KACh5ec9cDT+zf9dMuKoXOLM8tlnzEnEClBMr55W/7SzqOL4sFKnpMQsP8AAAAAElFTkSuQmCC" }
      )

      console.log("**++--//filterTeamGoal", this.teamGoalList)

    })

    return this.teamGoalList

  }

  getMyGoalList() {
    this.myKeysToSuccessService.getGoalList().subscribe(results => {
      this.allGoalData = results

      console.log("**++--//", this.allGoalData)

      this.MyGoalList = this.allGoalData.filter(
        (ele: any) => { return ele.icon == "iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAMAAAAZd2syAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAzUExURQAAAN/f39fX19ra2tfX19nZ2dfX19jY2NfX19ra2tra2tnZ2dra2tnZ2dnZ2dnZ2dnZ2VMHktcAAAAQdFJOUwAQIDBAUGBwgI+fr7/P3+8jGoKKAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABUUlEQVQ4T9VT3daEIAgU0yzzh/d/2m8gas09u9/1zkVHbGAGKPeDoLR5O35DYebFzp+xgMWbBZ9BQlstmBD2fPsJre/kVJae4r4zdzsDFHOVinRwsitFEqFgQahIEuRjUhfb3VRXI6GetUJRnstKbq1VziHGrXNTWoLEWStxwQPZZVfFqO+bhxjzcTcAray2BMgkqVO8WyUeWtolvhy/mtfR8bAxLKaeUhCDV5t+lnjYBOVCKtvxPIclt2pu2oQZ1gEUwkXQVrscXyC1Fp0HSewRDHekTttXa5p69rDBbtjuaV/Q7psFwC45jbOFF87u6204ycQqzE4QFRDVPQATHiWH+obKbQFxPyNUD0gdlmDAzlZwLzfYupR8zkPQUKnctILpIPP54QK4iwNNB1PngWhvNNIU75qHdD/T3oBt4cv9l+Z1MaFfv8wnpMdf9jtw7g+gCBMfF5RfCQAAAABJRU5ErkJggg==" }
      )

      console.log("**++--//filterMyGoalList", this.MyGoalList)

    })

    return this.MyGoalList

  }


  getBusinessGoalList() {

    this.myKeysToSuccessService.getGoalList().subscribe(results => {
      this.allGoalData = results

      console.log("**++--//", this.allGoalData)

      this.BusinessGoalList = this.allGoalData.filter(
        (ele: any) => { return ele.icon == "iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAMAAAAZd2syAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAzUExURQAAAN/f39fX19ra2tfX19nZ2dfX19jY2NfX19ra2tra2tnZ2dra2tnZ2dnZ2dnZ2dnZ2VMHktcAAAAQdFJOUwAQIDBAUGBwgI+fr7/P3+8jGoKKAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAj0lEQVQ4T+XRQQ6EIAwF0FJRGUDo/U87k/ZjTECXJmTeqm1+rFaaxxKySTsmI1zllDAb2KV+zCHiMOwFKai8CKPsPcc4YFU+l0aRiHJDijLe+kb7aLR34myxtP0UNKrFliu9KqMxGiJarzTm0aj2O/Bwo8ccLkVrKpNbUZsXDtL7v1hAP1Y8YkTuCTJTI/oCJP0pPY2k3a4AAAAASUVORK5CYII=" }
      )

      console.log("**++--//filterBuinessGoalList", this.BusinessGoalList)

    })

    return this.BusinessGoalList



  }








  setSuccessGoal(item: SuccessGoal) {
    this.selectedSuccessGoal = item;
  }


 


}
