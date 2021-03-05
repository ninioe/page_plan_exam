import { Component, ElementRef, HostListener, ViewChild, OnInit } from '@angular/core';
import * as data from '../data.json';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  @ViewChild('mb') menu_btn: ElementRef;

  activeTab = 1;
  showDropdown = false;
  users = data.users;
  employees = data.employees;
  users2 = data.users2;
  employees2 = data.employees2;

  @HostListener('document:click', ['$event'])
  onClick(event) {
    if (!this.menu_btn.nativeElement.contains(event.target)) {
      this.showDropdown = false;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
