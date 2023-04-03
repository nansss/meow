import { environment } from 'src/environment/environment';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  protected apiUrl = environment.apiUrl;
}
