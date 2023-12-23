import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterhrComponent } from './registerhr.component';

describe('RegisterhrComponent', () => {
  let component: RegisterhrComponent;
  let fixture: ComponentFixture<RegisterhrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterhrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
