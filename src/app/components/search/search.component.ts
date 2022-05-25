import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  inputSearch = new FormControl("");

  onSubmit(event: any) {
    event.preventDefault();
    this.search();

  }

  home() {
    this.router.navigate([``])
  }

  async search() {
    if (this.inputSearch.value.trim() !== "") {
      await this.router.navigate([`user/${this.inputSearch.value.trim()}`])
      location.reload()
    }
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.inputSearch.setValue("")
  }

}
