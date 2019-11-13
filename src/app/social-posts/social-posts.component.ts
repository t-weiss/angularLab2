import { Component, OnInit } from "@angular/core";
import { Post } from "../post";

@Component({
  selector: "app-social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: "Stairway",
      thought: "Any stairway is a stairway to heaven if you are clumsey enough."
    },
    {
      title: "Potatoes",
      thought: "Your stomach thinks all potatoes are mashed."
    },
    {
      title: "Age",
      thought: "You are currently the oldest you have ever been."
    }
  ];

  removeThought(index: number) {
    this.posts.splice(index, 1);
    console.log(index);
  }
  onDelete(index) {
    this.posts.splice(index, 1);
  }

  onSubmit(newPost) {
    this.posts.push(newPost);
    this.showForm();
  }
  status: boolean = true;
  showForm() {
    this.status = !this.status;
  }
  constructor() {}

  ngOnInit() {}
}
