import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarTestComponent } from './avatar-test.component';

describe('AvatarTestComponent', () => {
  let component: AvatarTestComponent;
  let fixture: ComponentFixture<AvatarTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [AvatarTestComponent]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(AvatarTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
