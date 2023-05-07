import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }

  importlocalstorage(){


    return JSON.parse(localStorage.getItem("articles")  || '[]' );
    
    }
    
      Addarticl(articlesData: any){
        articlesData.id=Math.floor(Math.random()*100)
        let articles = JSON.parse(localStorage.getItem("articles")  || '[]' );
        articles.push(articlesData);
          localStorage.setItem("articles",JSON.stringify(articles));
          
      }
    
      Deletearticles(i:any){
        let articles = JSON.parse(localStorage.getItem("articles")  || '[]' );
        articles.splice(i,1);
        localStorage.setItem('articles', JSON.stringify(articles));
        
      }
    
      Updatearticles(updatedata:any , iddata:any){
        let articles = JSON.parse(localStorage.getItem("articles")  || '[]' );
     let index=articles.findIndex((element: { id: any; })=> element.id === "iddata" );
     articles.splice(index,1,updatedata);
    
        localStorage.setItem('articles', JSON.stringify(articles));
        
      }
    
      getelemenbytid(x:any){
        let articles = JSON.parse(localStorage.getItem("articles")  || '[]' );
        let articl=articles.find((element: { id: any; })=>element.id==x);
        return articl
      }
    
}
