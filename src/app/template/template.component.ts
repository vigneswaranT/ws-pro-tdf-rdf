import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  vike: any;

  constructor() { }

  ngOnInit(): void {
  }
  abc(){
  this.vike="this value store";
  }
}
