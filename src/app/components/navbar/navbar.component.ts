import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  scrolledMenu: boolean = false;
  showMenu: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
      if (window.scrollY > 150) {
        this.scrolledMenu = true;
      } else {
        this.scrolledMenu = false;
        this.showMenu = false;
      }
  }

  public toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

}
