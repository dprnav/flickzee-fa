import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  searchCall(query){
    this.router.navigate(['/search'], { queryParams: { query: query }, skipLocationChange: true });
  }
  ngOnInit() {

  }

}
