import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.css']
})
export class Sidebar2Component implements OnInit {

  @Input()  categoryName:string ="";
 @Output() jinal=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSearchClick(searchTerm){
      this.jinal.emit(searchTerm);
  }
}
