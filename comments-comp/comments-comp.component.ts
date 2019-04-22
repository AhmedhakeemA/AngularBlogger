import { Component, OnInit } from '@angular/core';
import { CommentServiceService } from '../comment-service.service';

@Component({
  selector: 'app-comments-comp',
  templateUrl: './comments-comp.component.html',
  styleUrls: ['./comments-comp.component.css']
})
export class CommentsCompComponent implements OnInit {

  Comments:any[]=[];
  constructor(private CommentService: CommentServiceService) { }

  ngOnInit() {

this.CommentService.getAllComments().subscribe((commentsResponse:any[])=>{

this.Comments=commentsResponse;

console.log(commentsResponse);

});


  }

}
