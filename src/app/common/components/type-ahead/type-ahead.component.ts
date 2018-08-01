import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Output, ViewChild, EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'app-type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.css']
})
export class TypeAheadComponent implements OnInit {
  @Output() outputTxt = new EventEmitter<string>();;
  @ViewChild('input') input;

  constructor() { }

  ngOnInit() {
    fromEvent(this.input.nativeElement, 'keyup').subscribe((txt: any) => {
        this.outputTxt.emit(txt.target.value);
    });
  }

}
