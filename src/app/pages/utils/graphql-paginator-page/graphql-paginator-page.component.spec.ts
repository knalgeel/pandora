import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphqlPaginatorPageComponent } from './graphql-paginator-page.component';

describe('GraphqlPaginatorPageComponent', () => {
  let component: GraphqlPaginatorPageComponent;
  let fixture: ComponentFixture<GraphqlPaginatorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraphqlPaginatorPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphqlPaginatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
