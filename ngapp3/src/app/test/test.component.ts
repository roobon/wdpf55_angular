import { Component, OnInit } from '@angular/core';
import { Model } from '../repository.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {  
  }

  model: Model = new Model();
  title = "My Data Model";
}
