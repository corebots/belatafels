import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExampleService } from '../services/example.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private route: Router, private activatedRoute: ActivatedRoute, public myService: ExampleService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  showPic() {
    // this.myService
    console.log('ide kurva');
  }

  navigateTo(link) {
    let pagelink = link;
    this.route.navigate(['folder/' + pagelink])
  }
}
