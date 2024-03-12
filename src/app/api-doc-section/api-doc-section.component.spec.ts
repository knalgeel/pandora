import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDocSectionComponent } from './api-doc-section.component';

describe('ApiDocSectionComponent', () => {
  let component: ApiDocSectionComponent;
  let fixture: ComponentFixture<ApiDocSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ApiDocSectionComponent]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiDocSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
