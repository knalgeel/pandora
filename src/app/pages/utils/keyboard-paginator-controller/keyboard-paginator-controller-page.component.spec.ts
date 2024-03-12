import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardPaginatorControllerPageComponent } from './keyboard-paginator-controller-page.component';

describe('KeyboardPaginatorControllerComponent', () => {
  let component: KeyboardPaginatorControllerPageComponent;
  let fixture: ComponentFixture<KeyboardPaginatorControllerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [KeyboardPaginatorControllerPageComponent]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyboardPaginatorControllerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
