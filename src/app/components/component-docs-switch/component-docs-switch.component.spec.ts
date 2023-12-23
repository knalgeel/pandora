import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDocsSwitchComponent } from './component-docs-switch.component';

describe('ComponentDocsSwitchComponent', () => {
  let component: ComponentDocsSwitchComponent;
  let fixture: ComponentFixture<ComponentDocsSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentDocsSwitchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentDocsSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
