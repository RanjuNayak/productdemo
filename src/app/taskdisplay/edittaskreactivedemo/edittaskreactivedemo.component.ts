import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from '../task';
import { TaskdataService } from '../taskdata.service';

@Component({
  selector: 'app-edittaskreactivedemo',
  templateUrl: './edittaskreactivedemo.component.html',
  styleUrls: ['./edittaskreactivedemo.component.css']
})
export class EdittaskreactivedemoComponent implements OnInit {
  addtask: FormGroup;
   id: string;
  displayTask: Task;

  constructor( private _actroute: ActivatedRoute,
    private _data: TaskdataService,
    private fb: FormBuilder,
    private _router:Router) { }

  ngOnInit() {
    this.id = this._actroute.snapshot.params["Id"];
    this._data.getTaskById(this.id).subscribe((data: Task[]) => {
      this.displayTask = data[0];
      this.addtask.patchValue({
        Id: this.displayTask.Id,
        Title: this.displayTask.Title,
        Status: this.displayTask.Status,

      });
    });
    this.addtask = this.fb.group({
      Id: new FormControl(null, Validators.required),
      Title: new FormControl(null, Validators.required),
      Status: new FormControl(null, Validators.required),
  });


}
  onEditTask() {
    this._data
      .editTask(
        new Task(
          this.addtask.value.Id,
          this.addtask.value.Title,
          this.addtask.value.Status,
        )
      )

      .subscribe((x: any) => {
        // alert("record added");
        this._router.navigate(['/task']);
      });

}
}
