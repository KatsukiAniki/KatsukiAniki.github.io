import { Component, Input, OnInit } from '@angular/core';
import { valMembers, valGcMembers, lolMembers, creatorMembers } from 'src/app/member-data/members';

@Component({
  selector: 'app-player-cards',
  templateUrl: './player-cards.component.html',
  styleUrls: ['./player-cards.component.css']
})
export class PlayerCardsComponent implements OnInit {
  @Input() cardType: string = "";
  members: any[] = [];
  buttonUnfoldedIndex: number = -1; // Initialize to -1 to indicate no unfolded card

  constructor() {}

  ngOnInit(): void {
    console.log(this.cardType);
    switch (this.cardType) {
      case "VALORANT": {
        this.members = valMembers;
        break;
      }
      case "VALO GC": {
        this.members = valGcMembers;
        break;
      }
      case "LEAGUE": {
        this.members = lolMembers;
        break;
      }
      case "CREATOR": {
        this.members = creatorMembers;
        break;
      }
    }
  }

  public buttonUnfoldClick = (index: number) => {
    if (this.buttonUnfoldedIndex === index) {
      // Clicked on an already unfolded card, so close it
      this.buttonUnfoldedIndex = -1;
    } else {
      // Clicked on a different card, unfold it
      this.buttonUnfoldedIndex = index;
    }
  }
}
