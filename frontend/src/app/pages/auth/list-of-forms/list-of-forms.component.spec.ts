import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfFormsComponent } from './list-of-forms.component';

describe('ListOfFormsComponent', () => {
  let component: ListOfFormsComponent;
  let fixture: ComponentFixture<ListOfFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfFormsComponent]
    });
    fixture = TestBed.createComponent(ListOfFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
