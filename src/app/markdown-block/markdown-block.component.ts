import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import * as marked from 'marked';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-markdown-block',
    templateUrl: './markdown-block.component.html',
    styleUrl: './markdown-block.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class MarkdownBlockComponent implements OnInit {

    @Input({ required: true })
    asset: string;

    content: string;

    constructor(
        private readonly http: HttpClient,
    ) {}

    ngOnInit() {
        if (this.asset) {
            this.loadAsset();
        }
    }

    private loadAsset() {
        this.http.get(`assets/${ this.asset }`, { responseType: 'text' }).subscribe(data => {
            this.content = marked.parse(data) as string;
        });
    }

}
