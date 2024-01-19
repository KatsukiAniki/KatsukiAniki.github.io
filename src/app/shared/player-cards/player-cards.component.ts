import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/member-data/member';
import { valMainMembers, valSubMembers} from 'src/app/member-data/members';

@Component({
  selector: 'app-player-cards',
  templateUrl: './player-cards.component.html',
  styleUrls: ['./player-cards.component.css']
})
export class PlayerCardsComponent implements OnInit {
  @Input() cardType: string = "";
  mainMembers: Member[] = [];
  subMembers: Member[] = [];
  mainButtonUnfoldedIndex: number = -1;
  subButtonUnfoldedIndex: number = -1;

  constructor() {}

  ngOnInit(): void {
    switch (this.cardType) {
      case "VALORANT": {
        this.mainMembers = valMainMembers;
        this.subMembers = valSubMembers;
        break;
      }
      // case "VALO GC": {
      //   this.members = valGcMembers;
      //   break;
      // }
      // case "LEAGUE": {
      //   this.members = lolMembers;
      //   break;
      // }
      // case "CREATOR": {
      //   this.members = creatorMembers;
      //   break;
      // }
    }
  }

  closeMemberDetails(index: number, isMain: boolean) {
    if (isMain) {
      if (this.mainButtonUnfoldedIndex === index) {
        this.mainButtonUnfoldedIndex = -1;
      }
    } else {
      if (this.subButtonUnfoldedIndex === index) {
        this.subButtonUnfoldedIndex = -1;
      }
    }
  }

  public buttonUnfoldClick(index: number, isMain: boolean) {
    if (isMain) {
      if (this.mainButtonUnfoldedIndex === index) {
        this.mainButtonUnfoldedIndex = -1;
      } else {
        this.mainButtonUnfoldedIndex = index;
      }
    } else {
      if (this.subButtonUnfoldedIndex === index) {
        this.subButtonUnfoldedIndex = -1;
      } else {
        this.subButtonUnfoldedIndex = index;
      }
    }
  }
}
