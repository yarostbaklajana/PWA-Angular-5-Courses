import { TestBed, inject } from '@angular/core/testing';

import { OnlyAuthorizedUserAllowedGuardService } from './only-authorized-user-allowed-guard.service';

describe('OnlyAuthorizedUserAllowedGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnlyAuthorizedUserAllowedGuardService]
    });
  });

  it('should be created', inject([OnlyAuthorizedUserAllowedGuardService], (service: OnlyAuthorizedUserAllowedGuardService) => {
    expect(service).toBeTruthy();
  }));
});
