import { Component, OnInit, Inject } from '@angular/core';
import { trigger,state, style, transition, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations:[
    trigger('changeColor',[
    state('normal', style({
      transform:'translatex(0px) translatey(0px)'
    })),
    state('notnormal', style({
      'font-size': '35px',
      'width': '47vh',
      'height': '200px',
      'background-color': 'white',
      transform: 'translateX(39.9vw) translateY(40vh)'})),
    transition('normal <=> notnormal',animate(500))
  ])
  ]
})

export class HomePageComponent implements OnInit {

  public step:string = 'normal';
  public locationBtn:boolean = false;
  public operator:string = 'welcome';
  public projectChosen:boolean = true;

  constructor(@Inject(DOCUMENT) private document: Document) {
    setTimeout(() => {
      this.ChangeState();
    },0);
  }
  

  ngOnInit(): void {
  }

  public showLocation(){
    this.operator = 'location';
  };

  public showPhone(){
    this.operator = 'phone';
  };

  public showProjects(){
    this.operator = 'projects';
  };

  public ChangeState(){
    this.step == 'normal' ? this.step = 'notnormal' : this.step = 'normal';
};

public nextProject(){
  this.projectChosen = !this.projectChosen;
};

public goToNewsApp(){
  this.document.location.href = "http://news-app-ionic-angular.s3-website.us-east-2.amazonaws.com/home";
}

public goToUrbanjungleApp(){
  this.document.location.href = "http://urban-jungle.s3-website.eu-west-3.amazonaws.com/welcome-to-the-jungle";
}

}
