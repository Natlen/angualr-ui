import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit{
  
  drop_down : boolean = false;
  menu_icon : HTMLElement;
  constructor() { }
  
  dropMenuDown() : void {
    this.drop_down == true ? this.drop_down = false : this.drop_down = true;

    this.menu_icon.style.animationName = 'navbar-menu-icon-animation';
    setTimeout(() => {
      this.menu_icon.style.animationName = '';
    }, 1000);

  }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.menu_icon = document.getElementById('navbar-mobile-menu-icon'); 
    const lis = document.getElementsByClassName('separator') as HTMLCollectionOf<HTMLElement>;
    for(let i=0; i<lis.length; i++)
    {
      i % 2 == 0 ? lis[i].style.animationName = 'navbar-menu-entry-separator-animation-left' : lis[i].style.animationName = 'navbar-menu-entry-separator-animation-right';
      lis[i].style.animationDuration = `${1.2}s`;
      lis[i].style.animationDelay='0.2s';
    }
  }

}
