import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeInOutComponent } from './fade-in-out.component';

describe('AnimatedComponent', () => {
  let component: FadeInOutComponent;
  let fixture: ComponentFixture<FadeInOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FadeInOutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FadeInOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
