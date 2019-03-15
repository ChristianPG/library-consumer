import { Component, OnInit } from '@angular/core';
import { AdminPanelLibraryService } from 'projects/admin-panel-library/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'library-consumer';

  constructor(public adminPanelLibraryService: AdminPanelLibraryService) {}

  ngOnInit() {
    this.adminPanelLibraryService.getAccounts();
    
  }
}
