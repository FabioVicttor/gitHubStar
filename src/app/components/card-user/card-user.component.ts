import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {
  @Input()
  userInfo!: {
    nickname: string;
    name: string;
    avatar_url: string;
    perfil_url: string;
    company: string;
    location: string;
    email: string;
    bio: string;
    twitter_username: string;
    public_repos: number;
    blog: string;
  };
  constructor() {
    this.userInfo;
  }

  ngOnInit(): void {
  }

}
