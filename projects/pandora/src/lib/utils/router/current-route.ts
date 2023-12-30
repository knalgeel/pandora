import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter, map, Subject, tap } from "rxjs";
import { inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CurrentRoute {

    private readonly navigatedSubject = new Subject<ActivatedRoute>();
    private _route: ActivatedRoute;

    public readonly navigated$ = this.navigatedSubject.asObservable();

    constructor() {
        const router = inject(Router);
        const route = inject(ActivatedRoute);

        router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => this.findCurrentRoute(route)),
            tap(route => this.setCurrentRoute(route))
        ).subscribe();

        this.setCurrentRoute(this.findCurrentRoute(route));
    }

    private setCurrentRoute(route: ActivatedRoute) {
        this._route = route;
        this.navigatedSubject.next(route);
    }

    private findCurrentRoute(route: ActivatedRoute) {
        let currentRoute = route;
        while (currentRoute.firstChild) {
            currentRoute = currentRoute.firstChild;
        }
        return currentRoute;
    }

    get snapshot() {
        return this._route?.snapshot;
    }


}