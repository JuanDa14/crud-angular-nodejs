import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  constructor(private http: HttpClient) {}

  public get(url: string) {
    return this.http.get(url);
  }

  public delete(url: string) {
    return this.http.delete(url);
  }

  public put(url: any, body: any) {
    return this.http.put(url, body);
  }

  public post(url: string, body: any) {
    return this.http.post(url, body);
  }
}
