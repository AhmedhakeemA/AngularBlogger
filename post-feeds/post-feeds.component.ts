import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-feeds',
  templateUrl: './post-feeds.component.html',
  styleUrls: ['./post-feeds.component.css']
})
export class PostFeedsComponent implements OnInit {

  private posts: any[] = [];
  private comments: any[] = [];
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {


    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (res:any[])=>{

        console.log(res);
        this.posts=res;


        // var that=this;
        // -------------------Comments

        // that.posts.forEach(function (obj) {

        //   console.log(obj.id);

        //   that.http.get('https://jsonplaceholder.typicode.com/comments?postId='+obj.id).subscribe((commentsx: any[]) => {

           

        //     that.comments = commentsx;
        //     console.log(that.comments);

        //   }, (error) => { console.log('Error Comments !', error); });


        // });
// -------------------Comments

      
    
      },
      (error) => {

        console.log('Error !', error);
       } 
    );







  }


  onSearch(params: string) {
     this.router.navigate(['Dash/comment', params]); (1)
    // this.router.navigate(['Dash/comment']); 
  }



}
