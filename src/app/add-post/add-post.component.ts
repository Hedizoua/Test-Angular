import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {

  constructor(private Crud:CrudService , private router:Router){}

  submitted = false ;
  
  listform:FormGroup = new FormGroup({

    title: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    
    date: new FormControl('', [Validators.required]),
    
  });
  
  
  add(){
   this.Crud.Addarticl(this.listform.value)
   this.router.navigate(['/list-post']);
  }
  
}
