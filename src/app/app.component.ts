import { Component } from '@angular/core';
import { ExampleService } from './services/example.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // public appPages = [
  //   { title: 'Home', url: '/folder/home', icon: 'home' },
  //   { title: 'Table - Model 1', url: '/folder/tablemodel1', icon: 'camera', imgs: '../assets/imgs/post_1/detail_3/'},
  //   { title: 'Table - model 2', url: '/folder/tablemodel2', icon: 'camera' },
  //   { title: 'Contact', url: '/folder/Archived', icon: 'mail' },
  //   { title: 'About', url: '/folder/Trash', icon: 'information' }//,
  //   // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  // ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public myService: ExampleService ) {}
}
