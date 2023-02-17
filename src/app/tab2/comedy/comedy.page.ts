import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comedy',
  templateUrl: './comedy.page.html',
  styleUrls: ['./comedy.page.scss'],
})
export class ComedyPage implements OnInit {
  public movieData: any = []
  constructor(private http: HttpClient, private route :Router) { }

  ngOnInit() {
      this.getData()
  }
  getData(){
    this.http.get<[]>('/Moviestype/' + '喜劇片').subscribe(data => {
      console.log(data);
      this.movieData = data
    })
  }
  movieinfo(id: number) {
    this.movieData.find((element: any) => {
      if (element.id === id) {
        this.route.navigate(['/movie'], { queryParams: element })
      }
    })
  }
}
