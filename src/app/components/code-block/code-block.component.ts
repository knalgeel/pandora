import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import Prism from "prismjs";
import 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-json';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';

Prism.plugins['NormalizeWhitespace'].setDefaults({
    'remove-trailing': true,
    'remove-indent': true,
    'left-trim': true,
    'right-trim': true,
});

@Component({
    selector: 'app-code-block',
    templateUrl: './code-block.component.html',
    styleUrls: ['./code-block.component.scss']
})
export class CodeBlockComponent implements OnInit {

    private _content: string;

    // ----------[ Input ]----------

    @Input()
    title: string = '';

    @Input()
    set content(value: string) {
        this._content = value.trim();
    }

    get content(): string {
        return this._content;
    }

    @Input()
    language: string = 'typescript';

    @Input()
    asset: string;

    // ----------[ Refs ]----------

    @ViewChild('code', { static: true })
    code: ElementRef<HTMLElement>

    constructor(
        private readonly http: HttpClient,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) {}

    ngOnInit() {
        if (this.asset) {
            this.loadAsset();
        } else {
            this.highlight();
        }
    }

    private loadAsset() {
        this.http.get(`assets/${ this.asset }`, { responseType: 'text' }).subscribe(data => {
            this.content = data;
            this.highlight();
        });
    }

    private highlight() {
        this.changeDetectorRef.detectChanges();
        Prism.highlightElement(this.code.nativeElement);
    }
}
