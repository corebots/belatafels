import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {}

  navigateTo(link) {
    let pagelink = link;
    this.route.navigate(['folder/' + pagelink])
  }
}
