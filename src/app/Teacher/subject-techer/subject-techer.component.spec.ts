import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTecherComponent } from './subject-techer.component';

describe('SubjectTecherComponent', () => {
  let component: SubjectTecherComponent;
  let fixture: ComponentFixture<SubjectTecherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectTecherComponent]
    });
    fixture = TestBed.createComponent(SubjectTecherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
