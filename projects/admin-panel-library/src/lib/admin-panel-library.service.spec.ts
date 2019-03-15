import { TestBed } from '@angular/core/testing';

import { AdminPanelLibraryService } from './admin-panel-library.service';

describe('AdminPanelLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminPanelLibraryService = TestBed.get(AdminPanelLibraryService);
    expect(service).toBeTruthy();
  });
});
