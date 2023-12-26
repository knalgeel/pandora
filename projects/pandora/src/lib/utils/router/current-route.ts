import { ActivatedRoute, NavigationEnd, Route, Router } from "@angular/router";
import { filter, map } from "rxjs";
import { inject } from "@angular/core";

export class CurrentRoute {

    private _route: ActivatedRoute;

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
        ).subscribe(route => this._route = route);
    }

    get snapshot() {
        return this._route?.snapshot;
    }


}