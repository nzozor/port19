import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faJs, faNodeJs, faLinkedinIn, faSass, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'nz-headline-panel',
  templateUrl: './headline-panel.component.html',
  styleUrls: ['./headline-panel.component.scss']
})
export class HeadlinePanelComponent implements OnInit {
  
  faCoffee = faCoffee;
  faAngular = faAngular;
  faJs = faJs;
  faNodeJs = faNodeJs;
  faLinkedinIn = faLinkedinIn;
  faSass = faSass;
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  constructor() { }

  ngOnInit() {
  }

}
