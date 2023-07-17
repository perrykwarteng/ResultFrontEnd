import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReslutsComponent } from './add-resluts.component';

describe('AddReslutsComponent', () => {
  let component: AddReslutsComponent;
  let fixture: ComponentFixture<AddReslutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReslutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddReslutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
