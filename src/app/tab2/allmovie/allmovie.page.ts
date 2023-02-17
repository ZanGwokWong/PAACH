import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allmovie',
  templateUrl: './allmovie.page.html',
  styleUrls: ['./allmovie.page.scss'],
})
export class AllmoviePage implements OnInit {
  public movie: any = []
  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit() {
    this.getData()
  }
  getData(){
    this.http.get<[]>('Movies').subscribe(data => {      
      console.log(data);
      this.movie = data
    })
  }
  movieinfo(id: number) {
    this.movie.find((element: any) => {
      if (element.id === id) {
        this.route.navigate(['/movie'], { queryParams: element })
      }
    })
  }
}
