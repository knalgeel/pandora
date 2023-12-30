import { Injectable } from '@angular/core';

export type CacheDriver = 'localStorage' | 'sessionStorage';

@Injectable({
    providedIn: 'root'
})
export class CacheService {

    private static readonly CONTAINER_NAME = 'pandora';

    private readonly _container: any = {};

    private _driver: CacheDriver = 'localStorage';

    constructor() {
        this._container = this.getContainerInstance();
    }

    // ----------[ API ]----------

    public set(property: string, value: any): void {
        const segments = property.split('.');
        let currentSegment = this._container;

        for (let i = 0; i < segments.length; i++) {
            const segment = segments[i];

            if (i === segments.length - 1) {
                currentSegment[segment] = value;
                break;
            }

            if (! currentSegment[segment] || typeof currentSegment[segment] !== 'object') {
                currentSegment[segment] = {};
            }

            currentSegment = currentSegment[segment];
        }

        this.storage[CacheService.CONTAINER_NAME] = JSON.stringify(this._container);
    }

    public get(property: string = null): any {
        if (! property) {
            return this._container;
        }

        const segments = property.split('.');
        let currentSegment = this._container;

        for (const segment of segments) {
            if (! currentSegment[segment]) {
                return null;
            }
            currentSegment = currentSegment[segment];
        }

        return currentSegment;
    }

    // ----------[ Methods ]----------

    private getContainerInstance() {
        let container = this.parse(this.storage[CacheService.CONTAINER_NAME]);

        if (! container || typeof container !== 'object') {
            container = {};
            this.storage[CacheService.CONTAINER_NAME] = JSON.stringify(container);
        }

        return container;
    }

    private parse(item: any) {
        if (! item) {
            return null;
        }

        if (typeof item !== 'string') {
            return item;
        }

        return JSON.parse(item);
    }

    // ----------[ Getters ]----------

    private get storage() {
        switch (this._driver) {
            case 'localStorage':
                return localStorage;
            case 'sessionStorage':
                return sessionStorage;
        }
    }

    // ----------[ Setters ]----------

    set driver(driver: CacheDriver) {
        this._driver = driver;
    }

}
