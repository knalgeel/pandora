import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSelectOptionComponent } from './search-select-option.component';

describe('SearchSelectItemComponent', () => {
  let component: SearchSelectOptionComponent;
  let fixture: ComponentFixture<SearchSelectOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [SearchSelectOptionComponent]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchSelectOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
