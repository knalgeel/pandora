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
