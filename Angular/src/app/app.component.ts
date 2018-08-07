import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  constructor(public demoService: DemoService) {

  }

  ngOnInit() {
    this.demoService.getPost().then((res) => { console.log(res); })
  }

}
