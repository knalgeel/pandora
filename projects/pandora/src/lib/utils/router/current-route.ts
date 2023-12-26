import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter, map, Subject } from "rxjs";
import { inject } from "@angular/core";

export class CurrentRoute {

    private readonly navigatedSubject = new Subject<ActivatedRoute>();
    private _route: ActivatedRoute;

    public readonly navigated$ = this.navigatedSubject.asObservable();

    constructor() {
        const router = inject(Router);
        const route = inject(ActivatedRoute);

        router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => {
                let currentRoute = route;
                while (currentRoute.firstChild) {
                    currentRoute = currentRoute.firstChild;
                }
                return currentRoute;
            }),
        ).subscribe(route => {
            this._route = route;
            this.navigatedSubject.next(route);
        });
    }

    get snapshot() {
        return this._route?.snapshot;
    }


}