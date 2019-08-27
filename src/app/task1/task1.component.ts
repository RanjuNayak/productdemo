import { Component, OnInit } from '@angular/core';
import { Task } from '../taskdisplay/task';
import { ActivatedRoute } from '@angular/router';

import { TaskdataService } from '../taskdisplay/taskdata.service';


@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  arr:Task[]=[];
taskData:any;
errormsg:string;


  constructor( private _actroute:ActivatedRoute) {
    this.taskData=this._actroute.snapshot.data["tdata"];
    console.log(this.taskData);
   }

  ngOnInit() {

    this.arr=this.taskData.task;
    console.log(this.arr);
    this.errormsg=this.taskData.errormsg;
  }



}
