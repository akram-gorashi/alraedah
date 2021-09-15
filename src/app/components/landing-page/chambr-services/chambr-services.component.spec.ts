import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambrServicesComponent } from './chambr-services.component';

describe('ChambrServicesComponent', () => {
  let component: ChambrServicesComponent;
  let fixture: ComponentFixture<ChambrServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChambrServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChambrServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
