import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSelectItemComponent } from './search-select-item.component';

describe('SearchSelectItemComponent', () => {
  let component: SearchSelectItemComponent;
  let fixture: ComponentFixture<SearchSelectItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchSelectItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchSelectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
