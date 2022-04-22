import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaplocationComponent } from './maplocation.component';

describe('MaplocationComponent', () => {
  let component: MaplocationComponent;
  let fixture: ComponentFixture<MaplocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaplocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaplocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
