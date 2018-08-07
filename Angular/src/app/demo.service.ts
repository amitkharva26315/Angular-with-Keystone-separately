import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  apiBaseUrl: string = 'http://localhost:3000/keystone/api/posts';
  constructor(public http: HttpClient) {

  }

  getPost(): Promise<any> {
    return this.http.get(this.apiBaseUrl).toPromise();
  }
}
