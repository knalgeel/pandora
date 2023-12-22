import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeInputTestComponent } from './code-input-test.component';

describe('CodeInputTestComponent', () => {
  let component: CodeInputTestComponent;
  let fixture: ComponentFixture<CodeInputTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeInputTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodeInputTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
