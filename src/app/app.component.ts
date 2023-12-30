import { Component, computed, OnInit, Signal } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterOutlet } from '@angular/router';
import { CurrentRoute } from "../../projects/pandora/src/lib/utils/router/current-route";
import Prism from "prismjs";
import { CacheService, NotificationService } from "../../projects/pandora/src/lib/services";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title = 'Pandora';

    routes: Record<string, Route[]> = {
        components: [],
        utils: [],
        directives: [],
    }

    currentRoute: CurrentRoute;

    constructor(
        private readonly router: Router,
        private readonly cacheService: CacheService,
        private readonly notificationService: NotificationService,
    ) {
        this.currentRoute = new CurrentRoute();

        this.cacheService.set('test', 'test');
        if (this.cacheService.get('test') !== 'test') {
            console.error('CacheService is not working');
        } else {
            console.log('CacheService is working');
        }
    }

    ngOnInit() {
        this.routes['components'] = this.getRoutes('components');
        this.routes['utils'] = this.getRoutes('utils');
        this.routes['directives'] = this.getRoutes('directives');
    }

    private getRoutes(group: string) {
        return this.router.config.find(route => route.path === group).children;
    }
}
