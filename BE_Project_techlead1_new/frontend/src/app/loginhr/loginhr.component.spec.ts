import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginhrComponent } from './loginhr.component';

describe('LoginhrComponent', () => {
  let component: LoginhrComponent;
  let fixture: ComponentFixture<LoginhrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginhrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
