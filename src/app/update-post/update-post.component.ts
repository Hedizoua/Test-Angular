import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent {

  
  submitted=false;


  updateform:FormGroup=new FormGroup ({
    title: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    
    date: new FormControl('', [Validators.required]),
    
  })
 
  articleid:any;
  article: any;

  constructor(private route:ActivatedRoute ,private router : Router ,private crud:CrudService){}


  ngOnInit(): void {

 this.articleid=this.route.snapshot.paramMap.get('id');
 this.article=this.crud.getelemenbytid(this.articleid)
   
 this.updateform=new FormGroup ({
  id: new FormControl (""),
  title: new FormControl('', [Validators.required]),
  category: new FormControl('', [Validators.required]),
  description: new FormControl('', [Validators.required]),
  
  date: new FormControl('', [Validators.required]),
  

});
this.updateform.patchValue(this.article)

  }
  updateArticle(){
this.submitted=true;
if (this.updateform.invalid) {
  return;
  
}

this.crud.Updatearticles(this.updateform.value, this.articleid)
this.router.navigate(['/list-product']);
  }
  
}
