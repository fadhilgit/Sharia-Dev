import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.page.html',
  styleUrls: ['./finished.page.scss'],
})
export class FinishedPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  openConstructionInTab() {
    this.router.navigateByUrl('tabs/tab3');
  }
}
