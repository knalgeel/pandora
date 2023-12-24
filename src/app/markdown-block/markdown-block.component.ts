import {
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    OnInit,
    ViewContainerRef,
    ViewEncapsulation
} from '@angular/core';
import * as marked from 'marked';
import { HttpClient } from "@angular/common/http";
import Prism from "prismjs";
import { CodeBlockComponent } from "../components/code-block/code-block.component";
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
    selector: 'app-markdown-block',
    templateUrl: './markdown-block.component.html',
    styleUrl: './markdown-block.component.scss',
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('fadeAnimation', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('150ms ease-in', style({ opacity: 1 })),
            ]),
            transition(':leave', [
                style({ opacity: 1, position: 'absolute', width: '100%' }),
                animate('50ms', style({ opacity: 0 })),
            ]),
        ]),
    ]
})
export class MarkdownBlockComponent implements OnInit {

    @Input({ required: true })
    asset: string;

    content: string;

    constructor(
        private readonly http: HttpClient,
        private readonly changeDetector: ChangeDetectorRef,
        private readonly viewContainerRef: ViewContainerRef,
        private readonly elementRef: ElementRef,
    ) {}

    ngOnInit() {
        if (this.asset) {
            this.loadAsset();
        }
    }

    private loadAsset() {
        this.http.get(`assets/${ this.asset }`, { responseType: 'text' }).subscribe(data => {
            this.content = marked.parse(data) as string;
            this.changeDetector.detectChanges();
            this.wrapCodeBlocks();
        });
    }

    private wrapCodeBlocks() {
        const codeBlocks = [...this.elementRef.nativeElement.querySelectorAll('pre code')];
        codeBlocks.forEach(block => {
            const componentRef = this.viewContainerRef.createComponent(CodeBlockComponent);
            componentRef.instance.content = block.innerText;
            componentRef.instance.language = block.className.replace('language-', '');
            block.parentNode.replaceChild(componentRef.location.nativeElement, block);
        });
    }
}
