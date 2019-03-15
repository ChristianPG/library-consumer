import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-admin-panel-library',
  templateUrl: './admin-panel-library.component.html',
  styles: []
})
export class AdminPanelLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('library called');
    
  }

}
