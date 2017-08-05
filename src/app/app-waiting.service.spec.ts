import { TestBed, inject } from '@angular/core/testing';

import { AppWaitingService } from './app-waiting.service';

describe('AppWaitingService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AppWaitingService]
        });
    });

    it('should be created', inject([AppWaitingService], (service: AppWaitingService) => {
        expect(service).toBeTruthy();
    }));
});
