import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsCenterComponent } from './ads-center.component';

describe('AdsCenterComponent', () => {
  let component: AdsCenterComponent;
  let fixture: ComponentFixture<AdsCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
