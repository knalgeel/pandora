import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownBlockComponent } from './markdown-block.component';

describe('MarkdownBlockComponent', () => {
  let component: MarkdownBlockComponent;
  let fixture: ComponentFixture<MarkdownBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [MarkdownBlockComponent]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(MarkdownBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
