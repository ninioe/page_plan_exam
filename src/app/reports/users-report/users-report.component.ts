import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-report',
  templateUrl: './users-report.component.html',
  styleUrls: ['./users-report.component.css']
})
export class UsersReportComponent implements OnInit {
  @Input() users: any[];

  constructor() { }

  ngOnInit() {
  }

}
