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

@Component({
  selector: 'app-code-block',
  templateUrl: './code-block.component.html',
  styleUrl: './code-block.component.scss'
})
export class CodeBlockComponent implements OnInit{

    // ----------[ Input ]----------

    @Input()
    title: string = '';

    @Input()
    content: string = '';

    @Input()
    language: string = 'typescript';

    @Input()
    asset: string;

    // ----------[ Refs ]----------

    @ViewChild('code', { static: true }) code: ElementRef;

    constructor(
        private readonly http: HttpClient,
        private readonly elementRef: ElementRef,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) {}

    ngOnInit() {
        if (this.asset) {
            this.loadAsset();
        }
    }

    private loadAsset() {
        this.http.get(`assets/${this.asset}`, { responseType: 'text' }).subscribe(data => {
            this.content = data;
            this.changeDetectorRef.detectChanges();
            Prism.highlightElement(this.code.nativeElement);
        });
    }
}
