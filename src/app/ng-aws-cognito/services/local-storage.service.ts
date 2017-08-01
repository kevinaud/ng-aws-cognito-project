import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService {

    constructor() { }

    public getItem(key) {
        return localStorage.getItem(key);
    }

    public setItem(key, value) {
        return localStorage.setItem(key, value);
    }

    public removeItem(key) {
        return localStorage.removeItem(key);
    }

    public clear() {
        return localStorage.clear();
    }

    public regexRemoveItems(pattern: string) {
        let regex = new RegExp(pattern);
        let toRemove = [];

        for (let i = 0; i < localStorage.length; i++) {
            if (regex.test(localStorage.key(i))) {
                // need to add matching objects to an array rather than remove
                // them during the first pass since I am using indexes to
                // access each element and removing an item would alter
                // then index of the next element
                toRemove.push(localStorage.key(i));         
            }
        } 

        for (let i = 0; i < toRemove.length; i++) {
            localStorage.removeItem(toRemove[i]); 
        }
    }
}

@Injectable()
export class LocalStorageServiceStub {

    private storage = {};

    getItem(key) {
        return this.storage[key];
    }

    setItem(key, value) {
        this.storage[key] = value;
    }

    removeItem(key) {
        delete this.storage[key];
    }

    clear() {
        this.storage = {};
    }

    regexRemoveItems(pattern: string) {

    }

};

