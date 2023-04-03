import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storage = sessionStorage;
  private myData = new BehaviorSubject<any>(null);

  setData(key: string, data: any, pure = false) {
    if (pure) {
      this.storage.setItem(key, data);
    } else {
      const jsonData = JSON.stringify(data);
      this.storage.setItem(key, jsonData);
    }

    this.myData.next(data);
  }

  getData(key: string, pure = false): any {
    const data = this.storage.getItem(key) || null;

    if (data && !pure) {
      const jsonData = JSON.parse(data || JSON.stringify({}));
      this.myData.next(jsonData);
      return jsonData;
    }

    this.myData.next(data);

    return data;
  }
}
