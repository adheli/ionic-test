import { Injectable } from '@angular/core';

import { CONFIG_KEY } from './consts';

@Injectable()
export class ConfigurationProvider {

  private config: any = {
    showSlide: true,
    name: '',
    username: ''
  };

  constructor() {
    this.getConfig();
  }

  public getConfig(): any {
    if (localStorage.getItem(CONFIG_KEY) == undefined || localStorage.getItem(CONFIG_KEY) == null) {
      localStorage.setItem(CONFIG_KEY, JSON.stringify(this.config));
    }

    this.config = JSON.parse(localStorage.getItem(CONFIG_KEY));
    return this.config;
  }

  public setConfig(showSlide?: boolean, name?: string, username?: string): void {
    if (showSlide !== undefined) {
      this.config.showSlide = showSlide;
    }

    if (name) {
      this.config.name = name;
    }

    if (username) {
      this.config.username = username;
    }

    localStorage.setItem(CONFIG_KEY, JSON.stringify(this.config));
  }
}