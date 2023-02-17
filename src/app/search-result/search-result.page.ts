import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {
  public movie: any = []
  public message:string = ''


  constructor(private activatedRoute : ActivatedRoute , private route : Router , private http: HttpClient) { }

  ngOnInit() {
    this.getData()
  }
  getData(){
    this.activatedRoute.queryParams.subscribe((data:any) => {
      console.log(data); 
      if (!data.id) {
        this.message = '暫無結果'
        return
      }
      this.movie = [data]
    })
  }
  movieinfo(id:any){
    this.movie.find((element: any) => {
      if (element.id === id) {
        this.route.navigate(['/movie'], { queryParams: element })
      }
    })
  }
}
