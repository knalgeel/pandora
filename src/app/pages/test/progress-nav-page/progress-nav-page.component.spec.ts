import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressNavPageComponent } from './progress-nav-page.component';

describe('ProgressNavPageComponent', () => {
  let component: ProgressNavPageComponent;
  let fixture: ComponentFixture<ProgressNavPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgressNavPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgressNavPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
