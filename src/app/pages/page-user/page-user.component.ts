import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css']
})
export class PageUserComponent implements OnInit {

  user: string;
  userInfo: {
    nickname: string,
    name: string,
    avatar_url: string,
    perfil_url: string,
    company: string,
    location: string,
    email: string,
    bio: string,
    twitter_username: string,
    public_repos: number,
    blog: string;
  }

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) {
    this.user = this.route.snapshot.params['userName']
    this.userInfo = {
      nickname: "",
      name: "",
      avatar_url: "",
      perfil_url: "",
      company: "",
      location: "",
      email: "",
      bio: "",
      twitter_username: "",
      public_repos: 0,
      blog: ""
    }
  }



  ngOnInit(): void {
    this.userService.searchUser(this.user).subscribe(
      (res) => {
        this.userInfo = {
          nickname: res.login,
          name: res.name,
          avatar_url: res.avatar_url,
          perfil_url: res.perfil_url,
          company: res.company,
          location: res.location,
          email: res.email,
          bio: res.bio,
          twitter_username: res.twitter_username,
          public_repos: res.public_repos,
          blog: res.blog.replace("https://", "")
        }
      },
      (err) => {
        if (err.error.message === "Not Found") {
          this.router.navigate(["notFound"])
        }
      }, () => {

      }
    )
  }

}
