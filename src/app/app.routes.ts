import { Routes } from '@angular/router';
import { TableTestComponent } from "./pages/test/table-test/table-test.component";
import { CodeInputTestComponent } from "./pages/test/code-input-test/code-input-test.component";
import { AvatarTestComponent } from "./pages/test/avatar-test/avatar-test.component";
import { ArrayPaginatorPageComponent } from "./pages/utils/array-paginator-page/array-paginator-page.component";
import { GraphqlPaginatorPageComponent } from "./pages/utils/graphql-paginator-page/graphql-paginator-page.component";
import {
    KeyboardPaginatorControllerPageComponent
} from "./pages/utils/keyboard-paginator-controller/keyboard-paginator-controller-page.component";
import { ProgressNavPageComponent } from "./pages/test/progress-nav-page/progress-nav-page.component";
import { SearchSelectPageComponent } from "./pages/components/search-select-page/search-select-page.component";
import { FilterPageComponent } from "./pages/components/filter-page/filter-page.component";
import { NotificationTestComponent } from "./pages/test/notification-test/notification-test.component";

export const routes: Routes = [
    {
        path: 'components',
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
            },
            {
                path: 'progress-nav',
                component: ProgressNavPageComponent,
            },
            {
                path: 'search-select',
                component: SearchSelectPageComponent,
            },
            {
                path: 'filter',
                component: FilterPageComponent,
            },
            {
                path: 'notification',
                component: NotificationTestComponent
            }
        ]
    },
    {
        path: 'directives',
        children: []
    },
    {
        path: 'utils',
        children: [
            {
                path: 'array-paginator',
                component: ArrayPaginatorPageComponent,
            },
            {
                path: 'graphql-paginator',
                component: GraphqlPaginatorPageComponent,
            },
            {
                path: 'keyboard-paginator-controller',
                component: KeyboardPaginatorControllerPageComponent,
            }
        ]
    }
];
