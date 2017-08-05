import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AppWaitingService {

    $waiting: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor() {
        this.init(); 
    }

    init() {
        this.$waiting.next(false); 
    }

    setWaiting(waiting: boolean) {
        this.$waiting.next(waiting); 
    }

}
