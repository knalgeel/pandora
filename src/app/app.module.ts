import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { AppComponent } from "./app.component";
import { TableTestComponent } from './pages/test/table-test/table-test.component';
import { TableComponent } from "pandora";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgIconsModule } from "@ng-icons/core";
import { heroCheck, heroPencilSquare, heroTrash } from "@ng-icons/heroicons/outline";
import { PaginatorComponent } from "../../projects/pandora/src/lib/components/paginator/paginator.component";
import { CodeInputTestComponent } from './pages/test/code-input-test/code-input-test.component';
import { CodeInputComponent } from "../../projects/pandora/src/lib/components/code-input";
import { AvatarTestComponent } from './pages/test/avatar-test/avatar-test.component';
import { AvatarComponent } from "../../projects/pandora/src/lib/components/avatar";
import { AutoAnimateDirective } from "pandora";
import { CodeBlockComponent } from './components/code-block/code-block.component';
import { HttpClientModule } from "@angular/common/http";
import { ApiDocComponent } from './api-doc/api-doc.component';
import { ApiDocSectionComponent } from './api-doc-section/api-doc-section.component';
import { MarkdownBlockComponent } from './markdown-block/markdown-block.component';
import { ComponentDocsSwitchComponent } from './components/component-docs-switch/component-docs-switch.component';
import { TableActionsComponent } from "../../projects/pandora/src/lib/components/table";
import { FormsModule } from "@angular/forms";
import { ArrayPaginatorPageComponent } from './pages/utils/array-paginator-page/array-paginator-page.component';
import { GraphqlPaginatorPageComponent } from './pages/utils/graphql-paginator-page/graphql-paginator-page.component';
import { KeyboardPaginatorControllerPageComponent } from './pages/utils/keyboard-paginator-controller/keyboard-paginator-controller-page.component';
import { NotificationContainerComponent } from "../../projects/pandora/src/lib/components/notification";
import { ProgressNavPageComponent } from "./pages/test/progress-nav-page/progress-nav-page.component";
import {
    ProgressNavComponent
} from "../../projects/pandora/src/lib/components/navigation";
import { FadeInOutComponent } from "../../projects/pandora/src/lib/components/misc";
import { SearchSelectPageComponent } from './pages/components/search-select-page/search-select-page.component';
import { SearchSelectComponent } from "../../projects/pandora/src/lib/components/input";
import { SearchSelectOptionComponent } from './pages/components/search-select-page/item/search-select-option.component';

@NgModule({
    declarations: [
        AppComponent,
        TableTestComponent,
        CodeInputTestComponent,
        AvatarTestComponent,
        CodeBlockComponent,
        ApiDocComponent,
        ApiDocSectionComponent,
        MarkdownBlockComponent,
        ComponentDocsSwitchComponent,
        ArrayPaginatorPageComponent,
        GraphqlPaginatorPageComponent,
        KeyboardPaginatorControllerPageComponent,
        ProgressNavPageComponent,
        SearchSelectPageComponent,
        SearchSelectOptionComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
        NgIconsModule.withIcons({
            heroPencilSquare,
            heroTrash,
            heroCheck,
        }),

        TableComponent,
        TableActionsComponent,
        PaginatorComponent,
        CodeInputComponent,
        AvatarComponent,
        NotificationContainerComponent,
        ProgressNavComponent,
        FadeInOutComponent,
        SearchSelectComponent,

        AutoAnimateDirective,
        FormsModule,
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule {}
