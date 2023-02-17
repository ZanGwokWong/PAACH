import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: string = ''
  public password: string = ''
  public memberinfo: any
  constructor(private http: HttpClient , public alertController: AlertController, public route : Router) { }

  ngOnInit() {
  }
  login() {
    if (this.email && this.password) {
      this.http.get(`memberlogin/${this.email}/${this.password}`).subscribe(async (data: any) => {
        console.log(data);
        if (data[0].id) {
          this.memberinfo = data[0].name
          console.log(this.memberinfo);
          localStorage.setItem('name',this.memberinfo)
          
          const alert = await this.alertController.create({
            header: '登入成功',
            buttons: [
              {
                text: 'OK',
                handler: () => {
                  this.route.navigateByUrl('/tabs/tab1')
                }
              }
            ]
          });
          alert.present();
        }else{
          console.log(data);
          
        }
      })
    }
  }
}
