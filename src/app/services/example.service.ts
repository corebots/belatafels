import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  public appPages = [
    { id: 'home', title: 'Home', url: '/folder/Home', icon: 'home' },
    { id: 'tablemodel1', title: 'Table 1 - Chestnut', url: '/folder/tablemodel1', icon: 'camera', imgs: '../assets/imgs/post_1/detail_3/'},
    { id: 'tablemodel2', title: 'Table 2 - Walnut', url: '/folder/tablemodel2', icon: 'camera' },
    { id: 'contact', title: 'Contact', url: '/folder/Contact', icon: 'mail' },
    { id: 'about', title: 'About', url: '/folder/About', icon: 'information' }//,
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];

  public albums = [
    'Model 1',
    'Model 2',
    'Detailed shots',

  ];

  public photos = [
    // model 1
    [
      '../assets/imgs/table_1_front.jpg', 
      '../assets/imgs/table_1.jpg', 
    ],    
    // model 2
    [
      '../assets/imgs/table_2_front.jpg', 
      '../assets/imgs/table_2.jpg',
      '../assets/imgs/closeup_1.jpg', 
      '../assets/imgs/closeup_2.jpg', 
    ],
    // details
    [
      '../assets/imgs/post_1/detail_3.jpg',
      '../assets/imgs/post_1/detail_4.jpg',
      '../assets/imgs/post_1/detail_5.jpg',
      '../assets/imgs/post_1/detail_6.jpg',
      '../assets/imgs/post_1/detail_7.jpg'
    ],  
  ]

  public tafels = {
    'model1': {
      'ano': 'nie',
      'anoano': 'anoano'
    }
  }
  constructor() { }
}
