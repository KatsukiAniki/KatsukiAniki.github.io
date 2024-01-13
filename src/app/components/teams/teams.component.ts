import { Component, Renderer2, ElementRef, AfterViewInit, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TeamsComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
  }

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  tabs = [
    { label: 'VALORANT', img: 'https://team7.gg/wp-content/uploads/2023/07/vecteezy_valorant-logo-png-transparent_19763186_925.png', class: "valImg"},
    // { label: 'VALO GC', img: 'https://team7.gg/wp-content/uploads/2023/07/image-fotor-bg-remover-20230718182332.png', class: "valGcImg"},
    // { label: 'LEAGUE', img: 'https://team7.gg/wp-content/uploads/2023/07/pngwing.com_.png', class: "leagueImg"},
    // { label: 'CREATOR', img: 'https://team7.gg/wp-content/uploads/2023/07/t-fotor-bg-remover-20230720173351.png', class: "creatorImg"}
  ];

  ngAfterViewInit() {
    this.setTabLabelOpacity(0); // Set the initial opacity for the first tab
  }

  selectedTabIndex = 0;

  setTabLabelOpacity(selectedIndex: number) {
    const tabs = this.el.nativeElement.querySelectorAll('.mat-tab-label');
  
    tabs.forEach((tab: any, index:any) => {
      if (index === selectedIndex) {
        this.renderer.setStyle(tab, 'opacity', '1');
      } else {
        this.renderer.setStyle(tab, 'opacity', '0.6');
      }
    });
  }
  

  onTabChange(event: any): void {
    this.selectedTabIndex = event.index;
    this.setTabLabelOpacity(event.index);
  }
  

}
