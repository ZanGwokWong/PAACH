import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  public memberinfo:string = ''
  constructor(public alertController: AlertController, 
    private http : HttpClient, 
    private activatedRoute:ActivatedRoute ,
    private route :Router) { }
    ngOnInit() {
      this.presentingElement = document.querySelector('.ion-page');
      this.memberinfo = localStorage.getItem('name') || ''
      console.log(this.memberinfo);
      
    }
  // About us
  async AboutUs() {
    const alert = await this.alertController.create({
      header: '關於本應用程式',
      message: '<br>本應用程式由PAACH 公司開發及持有。<br><br>應用程式版本：version 1.1',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }
  // 推薦影片
  @ViewChild(IonModal) modal: IonModal | any;

  userEmail:string = ''
  movieName: string = '';
  movieComment: string = ''

  cancel() {
    this.modal.dismiss(null, 'cancel');
    this.userEmail = ''
    this.movieName = ''
    this.movieComment = ''
  }

  async confirm() {
    if (this.movieName && this.movieComment) {
      this.http.get(`/addmovie/${this.userEmail}/${this.movieName}/${this.movieComment}`).subscribe()
      const alert = await this.alertController.create({
        header:'推薦成功',
        message: '感謝您的推薦，我們收到后會聯係管理進行審核，如符合要求您會收到我們的Message回復',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.cancel()
            }
          }
        ]
      });
      await alert.present();
      this.userEmail = ''
      this.movieName = ''
      this.movieComment = ''
    }else{
      const alert = await this.alertController.create({
        header: '請確保填寫每一項',
        buttons: [
          {
            text: 'OK',
          }
        ]
      });
      await alert.present();
    }
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
  }

  // Cantact us
  presentingElement:any = null;

  logout(){
    localStorage.removeItem('name')
    this.memberinfo = localStorage.getItem('name') || ''
    this.route.navigateByUrl('/login')
  }
}
