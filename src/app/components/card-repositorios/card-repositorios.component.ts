import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'card-repositorios',
  templateUrl: './card-repositorios.component.html',
  styleUrls: ['./card-repositorios.component.css']
})
export class CardRepositoriosComponent implements OnInit {
  user: string;
  repositorios: {
    name: string,
    description: string,
    stargazers_count: string
  }[]
  loading: boolean = true

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.user = this.route.snapshot.params['userName']
    this.repositorios = []
  }

  ngOnInit(): void {
    this.userService.getRepositorios(this.user).subscribe(
      (res) => {
        this.repositorios = res
      },
      (err) => {

      },
      () => {

      }
    )
  }

}
