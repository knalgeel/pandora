import { Injectable } from '@angular/core';
import { BusinessOnboardingService } from "./business-onboarding.service";
import { filter, tap } from "rxjs";
import { SearchResult } from "../../../../graphql/generated";

export type CacheDriver = 'localStorage' | 'sessionStorage';

@Injectable({
    providedIn: 'root'
})
export class CacheService {

    private _driver: CacheDriver;

    // ----------[ API ]----------

    public init(driver: CacheDriver) {
        this._driver = driver;
    }

    public set(property: string, value: any) {
        const keys = property.split('.');
        const lastKey = keys.pop();
        const storage = this.storage;

        let current = this.parse(storage.getItem(keys[0])) || {};

        let obj = current;
        keys.forEach(key => {
            if (! obj[key] || typeof obj[key] !== 'object') {
                obj[key] = {};
            }
            obj = obj[key];
        });

        if (lastKey) {
            obj[lastKey] = value;
        }

        storage.setItem(keys[0], JSON.stringify(current));
    }

    public get(property: string) {
        const keys = property.split('.');
        const storage = this.storage;

        let current = this.parse(storage.getItem(keys[0]));

        for (const key of keys.slice(1)) {
            if (current === null || typeof current !== 'object' || ! (key in current)) {
                return null;
            }
            current = current[key];
        }

        return current;
    }

    // ----------[ Getters ]----------

    private get storage(): Storage {
        switch (this.driver) {
            case 'localStorage':
                return localStorage;
            case 'sessionStorage':
                return sessionStorage;
        }
    }

}
