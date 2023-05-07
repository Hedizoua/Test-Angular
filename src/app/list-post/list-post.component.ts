import { Component } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent {
  constructor(public Crud:CrudService ){}


  articles = JSON.parse(localStorage.getItem("articles")  || '[]' );

 
   Delete(i:any){
    this.Crud.Deletearticles(i);
  
   }
}
