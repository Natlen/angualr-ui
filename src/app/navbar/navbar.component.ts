import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit{
  
  drop_down : boolean = false;
  menu_icon : HTMLElement;
  lis : HTMLCollectionOf<HTMLElement>;
  constructor() { }
  
  dropMenuDown() : void {
    this.menu_icon.style.animationName = 'navbar-menu-icon-animation';
    const navbar_menu_entries_container = document.getElementById('navbar_menu_entries_container');
    setTimeout(() => {
      this.menu_icon.style.animationName = '';
    }, 1000);
    if(this.drop_down == false)
    {
      for(let i=0; i<this.lis.length; i++)
    {
      i % 2 == 0 ? this.lis[i].style.animationName = 'navbar-menu-entry-separator-animation-left' : this.lis[i].style.animationName = 'navbar-menu-entry-separator-animation-right';
      this.lis[i].style.animationDuration = `${1.2}s`;
      this.lis[i].style.animationDelay='0.2s';
    }
      navbar_menu_entries_container.style.animationName = 'navbar-menu-entries-container-animation';
      setTimeout(() => {
        navbar_menu_entries_container.style.animationName = '';
        
      }, 1000);  
      this.drop_down = true;  
    }
    else {
      
      for(let i=0; i<this.lis.length; i++)
      {
        i % 2 == 0 ? this.lis[i].style.animationName = 'navbar-menu-entry-separator-animation-left-close' : this.lis[i].style.animationName = 'navbar-menu-entry-separator-animation-right-close';
        this.lis[i].style.animationDuration = `${1}s`;
        this.lis[i].style.animationDelay='0s';
      }
      navbar_menu_entries_container.style.animationName = 'navbar-menu-entries-container-animation-close';
      setTimeout(() => {
        navbar_menu_entries_container.style.animationName = '';
        
      this.drop_down = false;
      }, 1000);
    }

  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.lis = document.getElementsByClassName('separator') as HTMLCollectionOf<HTMLElement>;
    this.menu_icon = document.getElementById('navbar-menu-icon');
  }

}
