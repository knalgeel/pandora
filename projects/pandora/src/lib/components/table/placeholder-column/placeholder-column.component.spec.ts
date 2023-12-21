import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderColumnComponent } from './placeholder-column.component';

describe('PlaceholderColumnComponent', () => {
  let component: PlaceholderColumnComponent;
  let fixture: ComponentFixture<PlaceholderColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceholderColumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaceholderColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
