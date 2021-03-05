import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-report',
  templateUrl: './employees-report.component.html',
  styleUrls: ['./employees-report.component.css']
})
export class EmployeesReportComponent implements OnInit {
  @Input() employees: any[];

  constructor() { }

  ngOnInit() {
  }

}
