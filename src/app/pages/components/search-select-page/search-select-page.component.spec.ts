import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSelectPageComponent } from './search-select-page.component';

describe('SearchSelectPageComponent', () => {
  let component: SearchSelectPageComponent;
  let fixture: ComponentFixture<SearchSelectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [SearchSelectPageComponent]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchSelectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
