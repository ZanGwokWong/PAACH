import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public index: number = 0
  public hitmovie:any = []
  public nicemovie:any = []
  public setTime:any
  constructor(private el: ElementRef , private http : HttpClient , private route : Router) { }

  ngOnInit() {
    this.getNicemovie()
    this.gatHitmovie()
    this.imgauto()
  }
  getNicemovie(){
    this.http.get('/nicemovie').subscribe(data => {
      this.nicemovie = data
    })
  }
  gatHitmovie(){
    this.http.get('/hitmovie').subscribe(data => {
      this.hitmovie = data
    })
  }
  NiceMovieInfo(id:string){
      this.nicemovie.find((element: any) => {
        if (element.id === id) {
          this.route.navigate(['/movie'], { queryParams: element })
        }
      })
  }
  HitMovieInfo(id:string){
    this.hitmovie.find((element: any) => {
      if (element.id === id) {
        this.route.navigate(['/movie'], { queryParams: element })
      }
    })
}
  imgLeftRun() {
    this.index--
    if (this.index < 0) {
      this.index = 2
    }
    // 獲取DOM
    let box = this.el.nativeElement.querySelector('.bannerbox')
    // 獲取box元素 width value
    let width = box.offsetWidth
    // 偏移 ： 寬度 * 索引 * -1
    let num = width * this.index * -1
    box.style.transform = `translateX(${num + 'px'})`
  }
  imgRightRun() {
    this.index++
    if (this.index > 2) {
      this.index = 0
    }
    // 獲取DOM
    let box = this.el.nativeElement.querySelector('.bannerbox')
    // 獲取box元素 width value
    let width = box.offsetWidth
    // 偏移 ： 寬度 * 索引 * -1
    let num = width * this.index * -1
    box.style.transform = `translateX(${num + 'px'})`
  }
  // 圖片自動切換
  imgauto() {
    this.setTime = setInterval(() => {
      this.imgRightRun()
    }, 2000)
  }
  // 左側按鈕
  leftbtn() {
    clearInterval(this.setTime)
    this.imgLeftRun()
    this.setTime = setInterval(() => {
      this.imgRightRun()
    }, 2000)
  }
  // 右側按鈕
  rightbtn() {
    clearInterval(this.setTime)
    this.imgRightRun()
    this.setTime = setInterval(() => {
      this.imgRightRun()
    }, 2000)
  }
}
