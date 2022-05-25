import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-page-search',
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.css']
})
export class PageSearchComponent implements OnInit {
  inputSearch = new FormControl("");

  search() {
    if (this.inputSearch.value.trim() !== "") {
      this.router.navigate([`user/${this.inputSearch.value.trim()}`])
    }
  }
  onSubmit(event: any) {
    event.preventDefault();
    this.search();

  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
