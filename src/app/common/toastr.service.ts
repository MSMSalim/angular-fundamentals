import { InjectionToken } from '@angular/core';

export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr', {
  providedIn: 'root',
  factory: () => {
    let toastr: Toastr = window['toastr'];
    return toastr;
  },
});

export interface Toastr {
  success(msg: string, title?: string): void;
  info(msg: string, title?: string): void;
  warning(msg: string, title?: string): void;
  error(msg: string, title?: string): void;
}
