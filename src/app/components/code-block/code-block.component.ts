import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import Prism from "prismjs";

@Component({
  selector: 'app-code-block',
  templateUrl: './code-block.component.html',
  styleUrl: './code-block.component.scss'
})
export class CodeBlockComponent implements OnInit{

    @Input()
    title: string = '';

    @Input()
    content: string = '';

    @Input()
    asset: string;

    constructor(
        private readonly http: HttpClient,
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
            Prism.highlightAll();
        });
    }
}
