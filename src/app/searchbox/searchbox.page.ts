import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { nanoid } from "nanoid";

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.page.html',
  styleUrls: ['./searchbox.page.scss'],
})
export class SearchboxPage implements OnInit {
  public keyword: string = ''
  public record: any = []
  public status = false
  constructor(private http: HttpClient, private route: Router,) { }

  ngOnInit() {
    this.local()
  }
  // set localStorage & get localStorage
  local() {
    const data = localStorage.getItem('records')
    if (data != null) {
      this.record = JSON.parse(data)
    } else {
      localStorage.setItem("records", JSON.stringify(this.record))
    }
  }
  // 刪除搜尋記錄
  delete(id: number) {
    console.log(id);
    this.record = this.record.filter((item: any) => {
      return item.id !== id
    })
    localStorage.setItem("records", JSON.stringify(this.record))
  }
  // 獲取數據
  getData() {
    this.http.get('/Moviestitle/' + this.keyword).subscribe((data: any) => {
      this.status = false
      this.route.navigate(['/search-result'], { queryParams: data[0] })
      this.keyword = ''
    })
  }
  // 搜索
  search() {
    if (this.record.length > 4) {
      this.record.pop()
    }
    if (this.keyword) {
      this.status = true
      this.getData()
      const obj = {
        id: nanoid(),
        value: this.keyword
      }
      this.record.unshift(obj)
      localStorage.setItem("records", JSON.stringify(this.record))
    }
  }
  // 點擊搜索記錄進行搜索
  onclick(keyword: string) {
    this.keyword = keyword
    this.status = true
    this.getData()
  }
}
