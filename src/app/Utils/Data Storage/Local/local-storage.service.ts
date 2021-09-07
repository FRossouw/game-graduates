import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  get(key: string): any {
    return localStorage ? localStorage.getItem(key) : null;
  }

  set(key: string, value: any): void {
    if (localStorage) {
      localStorage.setItem(key, value);
    }
  }

}
