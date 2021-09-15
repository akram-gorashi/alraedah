import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportBusinessComponent } from './support-business.component';

describe('SupportBusinessComponent', () => {
  let component: SupportBusinessComponent;
  let fixture: ComponentFixture<SupportBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
