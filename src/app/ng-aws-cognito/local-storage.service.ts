import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService {

  constructor() { }

  getItem(key) {
    return localStorage.getItem(key);
  }

  setItem(key, value) {
    return localStorage.setItem(key, value);
  }

  removeItem(key) {
    return localStorage.removeItem(key);
  }

  clear() {
    return localStorage.clear();
  }

}