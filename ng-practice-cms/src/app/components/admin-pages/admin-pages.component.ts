import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-pages',
  templateUrl: './admin-pages.component.html',
  styleUrls: ['./admin-pages.component.css']
})
export class AdminPagesComponent implements OnInit {
  pages: any;
  successMsg: boolean = false;

  constructor(
    private router: Router,
    private pageService: PageService,
    private title: Title

  ) { }

  ngOnInit() {
    if (localStorage.getItem("user") != "\"admin\"") {
      this.router.navigateByUrl('');
      this.title.setTitle('Home');
    }
    else
      this.title.setTitle('CMS');
    this.pages = this.pageService.pagesBS;

  }

  deletePage(id) {
    if (confirm('Confirm Deletion')) {

        this.pageService.deletePage(id).subscribe(res => {
        this.successMsg = true;
        setTimeout(function () {
          this.successMsg = false;
        }.bind(this), 2000);

        this.pageService.getPages().subscribe(pages => {
          this.pageService.pagesBS.next(pages);
        });


      });

    }

  }
}
