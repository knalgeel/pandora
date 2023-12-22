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
import { heroPencilSquare, heroTrash } from "@ng-icons/heroicons/outline";
import { PaginatorComponent } from "../../projects/pandora/src/lib/components/paginator/paginator.component";
import { CodeInputTestComponent } from './pages/test/code-input-test/code-input-test.component';
import { CodeInputComponent } from "../../projects/pandora/src/lib/components/code-input";
import { AvatarTestComponent } from './pages/test/avatar-test/avatar-test.component';
import { AvatarComponent } from "../../projects/pandora/src/lib/components/avatar";
import { AutoAnimateDirective } from "pandora";

@NgModule({
    declarations: [
        AppComponent,
        TableTestComponent,
        CodeInputTestComponent,
        AvatarTestComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
        NgIconsModule.withIcons({
            heroPencilSquare,
            heroTrash,
        }),

        TableComponent,
        PaginatorComponent,
        CodeInputComponent,
        AvatarComponent,

        AutoAnimateDirective,
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule {}
