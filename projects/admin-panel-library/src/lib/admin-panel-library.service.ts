import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelLibraryService {

  constructor() { }

  getAccounts() {
    console.log('Loading Accounts from version 2');
    
  }
}
