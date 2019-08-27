import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TaskdataService } from '../taskdata.service';
import { Title } from '@angular/platform-browser';
import { Task } from '../task';

@Component({
  selector: 'app-addtaskreactivedemo',
  templateUrl: './addtaskreactivedemo.component.html',
  styleUrls: ['./addtaskreactivedemo.component.css']
})
export class AddtaskreactivedemoComponent implements OnInit {
  addtask: FormGroup;

  constructor(private fb: FormBuilder, private _data: TaskdataService) { }

  ngOnInit() {

    this.addtask = this.fb.group({
      Id : new FormControl(null,Validators.required),
      Title : new FormControl(null,Validators.required),
       Status: new FormControl(null,Validators.required)


    });
  }
  onSaveTask() {
    this._data
      .addTask(
        new Task(
          this.addtask.value.Id,
          this.addtask.value.Title,
          this.addtask.value.Status,
        )
      )

      .subscribe((x: any) => {
        alert("record added");
      });

}
}
