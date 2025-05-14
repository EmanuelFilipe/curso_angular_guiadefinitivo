import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs' 

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: any

  constructor(private http: HttpClient) { 
    console.log('Config:service')
  }

  loadConfigFile(): Promise<void> { 
    return firstValueFrom(this.http.get<any>('/public/config.json'))
    .then((config: any) => { this.config = config; })
    .catch((error: any) => { console.error('Erro ao carregar o arquivo de configuração', error); throw error; }); 
  }

  getConfig(key: string): string { 
    return this.config[key];
  }
}
