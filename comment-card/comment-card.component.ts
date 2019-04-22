import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {

  public comments:any[]=[];
  private post_ID:any;
  constructor(private route: ActivatedRoute,private http:HttpClient,private rou:Router) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.post_ID = params;
     
    }

    );

  
  }

  ngOnInit() {

    this.http.get('https://jsonplaceholder.typicode.com/comments?postId=' + this.post_ID.id).subscribe(
      (res: any[]) => {

        console.log(res);
        this.comments = res;

        if ( !this.comments.length) {
          this.rou.navigate(['Dash/feeds']);
        }
        console.log(this.comments);
      },
      (error) => {

        console.log('Error !', error);
      }
    );








  }

}
