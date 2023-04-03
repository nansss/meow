import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FactsService extends ApiService {
  constructor(private http: HttpClient) {
    super();
  }

  getFacts() {
    return this.http.get(this.apiUrl).pipe(
      map((result: any) => {
        return result?.data[0];
      })
    );
  }
}
