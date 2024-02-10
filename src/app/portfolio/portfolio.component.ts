import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  imgUrl:string='../../assets/port1.png';
  box = document.querySelector('BackLight');
   dataImg(){
   this.box?.classList.replace("d-none","d-flex");
   }
}
