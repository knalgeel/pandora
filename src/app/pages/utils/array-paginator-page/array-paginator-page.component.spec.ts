import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayPaginatorPageComponent } from './array-paginator-page.component';

describe('ArrayPaginatorPageComponent', () => {
  let component: ArrayPaginatorPageComponent;
  let fixture: ComponentFixture<ArrayPaginatorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ArrayPaginatorPageComponent]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrayPaginatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
