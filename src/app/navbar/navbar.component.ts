import { style } from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  drop_down : boolean = false;
  
  constructor() { }
  
  dropMenuDown() : void {
    this.drop_down == true ? this.drop_down = false : this.drop_down = true;
  }

  ngOnInit(): void {
    
  }

}
