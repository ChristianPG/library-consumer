import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelLibraryComponent } from './admin-panel-library.component';

describe('AdminPanelLibraryComponent', () => {
  let component: AdminPanelLibraryComponent;
  let fixture: ComponentFixture<AdminPanelLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPanelLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
