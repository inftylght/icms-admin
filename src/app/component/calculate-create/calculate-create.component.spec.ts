import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateCreateComponent } from './calculate-create.component';

describe('CalculateCreateComponent', () => {
  let component: CalculateCreateComponent;
  let fixture: ComponentFixture<CalculateCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
