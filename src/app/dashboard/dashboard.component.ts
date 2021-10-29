import { DatePipe } from '@angular/common';
import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,FormBuilder,Validators} from '@angular/forms';
import { BarGraphComponent } from './barchart/barchart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  @ViewChild(BarGraphComponent) childBarGraphComponent;
  datepickerForm: FormGroup;
  datepickerTo: FormGroup;
  startDate;
  endDate;
  dateFormat = "MM/dd/YYYY";

  constructor(public _formBuilder: FormBuilder, public _datePipe:DatePipe) {
   
    this.datepickerForm = this._formBuilder.group({
      'startDate': [null, Validators.required],
    });
    this.datepickerTo = this._formBuilder.group({
      'endDate': [null, Validators.required]
    });
  }

  ngAfterViewInit(): void {
    this.setMyDatePicker();
    this.onRefresh();
  }

  onRefresh() {
    this.childBarGraphComponent?.CallApi_getCountsPerDay(this.startDate.formatted,this.endDate.formatted);
  }

  private setMyDatePicker()
  {
    var date = Date.now();
    this.startDate = { date: {year: (new Date()).getFullYear(), month: (new Date()).getMonth() + 1, day: (new Date()).getDate()} };
    this.endDate = { date: {year: (new Date()).getFullYear(), month: (new Date()).getMonth() + 1, day: (new Date()).getDate()} };
    this.startDate.formatted =this._datePipe.transform(date,this.dateFormat);
    this.endDate.formatted =this._datePipe.transform(date,this.dateFormat);
  }
}
