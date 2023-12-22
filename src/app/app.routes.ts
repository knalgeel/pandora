import { Routes } from '@angular/router';
import { TableTestComponent } from "./pages/test/table-test/table-test.component";
import { CodeInputTestComponent } from "./pages/test/code-input-test/code-input-test.component";
import { AvatarTestComponent } from "./pages/test/avatar-test/avatar-test.component";

export const routes: Routes = [
    {
        path: 'test',
        children: [
            {
                path: 'table',
                component: TableTestComponent,
            },
            {
                path: 'code-input',
                component: CodeInputTestComponent,
            },
            {
                path: 'avatar',
                component: AvatarTestComponent,
            }
        ]
    }
];
