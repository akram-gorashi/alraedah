import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsServicesComponent } from './electronics-services.component';

describe('ElectronicsServicesComponent', () => {
  let component: ElectronicsServicesComponent;
  let fixture: ComponentFixture<ElectronicsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicsServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
