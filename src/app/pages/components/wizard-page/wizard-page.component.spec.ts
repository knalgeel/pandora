import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardPageComponent } from './wizard-page.component';

describe('WizardPageComponent', () => {
  let component: WizardPageComponent;
  let fixture: ComponentFixture<WizardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WizardPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WizardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
