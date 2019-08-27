import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { taskResolved } from './taskdisplay/task';
import { TaskdataService } from './taskdisplay/taskdata.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskResolverService implements Resolve<taskResolved> {

  constructor(private _taskdata:TaskdataService) { }

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<any>{
    return this._taskdata.getAllTasks().pipe(
      map(x=>({task:x,errormsg:''})),
      catchError(error=>{
        return of({task:null,errormsg:'Something went wrong'})
      })
    );

  }
}
