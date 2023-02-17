import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  nameMsg:string = ''
  emailMsg:string = ''
  passMsg:string = ''
  cfmpassMsg:string = ''
  public email: string = ''
  public password: string = ''
  public fullname: string = ''
  public cfmpassword: string = ''
  public movie = []
  constructor(private http: HttpClient,
    public alertController: AlertController,
    private route: Router,
  ) { }

  ngOnInit() {
    
  }
  async submit() {
    if (this.email && this.fullname && this.password && this.cfmpassword) {
      if (this.fullname.length < 4 || this.fullname.length > 12) {
        this.nameMsg = '用戶名長度在4-12位字符之間'
        this.fullname = ''
      }else if (this.email.indexOf('@') == -1) {
        this.emailMsg = '請輸入正確的電郵格式'
        this.email = ''
      }else if (this.password.length < 6 || this.fullname.length > 12 ) {
        this.passMsg = '密碼需為4-12位數字及字符組成'
        this.password = ''
      }else if (this.cfmpassword != this.password) {
        this.cfmpassMsg = '密碼不一致'
        this.cfmpassword = ''
      }else{
        this.http.get(`/rgeister/${this.fullname}/${this.email}/${this.password}`).subscribe()
        const alert = await this.alertController.create({
          header: '注冊成功',
          buttons: [
            {
              text: '立即登入',
              handler: () => {
                this.route.navigateByUrl('/login')
              }
            }
          ]
        });
        alert.present();
      }
    } else {
      const alert = await this.alertController.create({
        header: '請確保填寫每一項',
        buttons: [
          {
            text: 'OK',
          }
        ]
      });
      alert.present();
    }
  }
}
