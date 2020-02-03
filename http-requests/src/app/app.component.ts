import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.http
      .post<{name: string}>(
        'https://angular-8-complete-guide-api.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http.get<{ [key: string] : Post }>('https://angular-8-complete-guide-api.firebaseio.com/posts.json')
      .pipe(
        map((responseData) => {
          const postsArray:Post[] = [];
          for (const postKey in responseData) {
            if (responseData.hasOwnProperty(postKey)) {
              const element = responseData[postKey];
              postsArray.push({ ...element, id: postKey });
            }
          }
          return postsArray
        })
      )
      .subscribe(posts => {
        console.log(posts);
      });
  }
}
