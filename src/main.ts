import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
