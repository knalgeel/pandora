import { Component, computed, OnInit, Signal } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterOutlet } from '@angular/router';
import { CurrentRoute } from "../../projects/pandora/src/lib/utils/router/current-route";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title = 'Pandora';
    routes: Signal<Route[]>
    currentRoute: CurrentRoute;

    constructor(private readonly router: Router) {
        this.currentRoute = new CurrentRoute();
    }

    ngOnInit() {
        this.routes = computed(() => this.router.config.find(route => route.path === 'test').children);
    }

}
