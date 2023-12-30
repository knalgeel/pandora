import { Injectable } from '@angular/core';

export type CacheDriver = 'localStorage' | 'sessionStorage';

@Injectable({
    providedIn: 'root'
})
export class CacheService {

    private _driver: CacheDriver = 'localStorage';

    // ----------[ API ]----------

    public set(property: string, value: any) {
        const keys = property.split('.');

        if (keys.length === 1) {
            this.storage.setItem(keys[0], JSON.stringify(value));
            return;
        }

        const lastKey = keys.pop();
        const storage = this.storage;

        let current = this.parse(storage.getItem(keys[0])) || {};
        let obj = current;

        keys.forEach(key => {
            if (!obj[key] || typeof obj[key] !== 'object') {
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

    // ----------[ Methods ]----------

    private parse(item: string | null) {
        try {
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('Error parsing JSON', e);
            return null;
        }
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
