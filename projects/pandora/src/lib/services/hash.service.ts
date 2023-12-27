import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HashService {

    public hash(s: string): string {
        return s.split("").reduce(function (a, b) {
            a = ((a << 5) - a) + b.charCodeAt(0);
            return a & a;
        }, 0).toString();
    }

}
