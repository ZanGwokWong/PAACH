import { Component, OnInit , ViewChild} from '@angular/core';
import { AlertController, IonModal } from '@ionic/angular';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  public name : string = ''
  public message:string = ''
  public movieData:any
  public m_score:string = '0'
  public scorelist = ['1','2','3','4','5','6','7','8','9','10']
  public commentList:any = []
  @ViewChild(IonModal) modal: IonModal | any;
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
  constructor(public alertController: AlertController , private activatedRoute:ActivatedRoute ,private http:HttpClient , private route:Router) { }
  async presentSubmitted() {
    if (!this.name) {
      const alert = await this.alertController.create({
        header: '請先完成登陸',
        buttons: [
          {
            text: '去登陸',
            handler: () => {
              this.route.navigateByUrl('/login')
            }
          }
        ]
      });
      alert.present();
    }
    if (this.message && this.name && this.m_score) {
          this.http.get(`/comment/${this.movieData.id}/${this.message}/${this.name}/${this.m_score}`).subscribe()
          this.message = ''
          this.m_score = '0'
          this.getcomment()
          const alert = await this.alertController.create({
            header: '成功發佈',
            buttons: ['OK']
          });
          await alert.present();
    }
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(data => {
      this.movieData = data
    })
    this.name = localStorage.getItem('name') || ''
    this.getcomment()
  }
  getcomment(){
    this.http.get(`/commentList/${this.movieData.id}`).subscribe(data => {
      this.commentList = data
    })
  }
  score(num:string){
    this.m_score = num
  }
}


