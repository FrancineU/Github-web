import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User.InfoComponent } from './user.info.component';

describe('User.InfoComponent', () => {
  let component: User.InfoComponent;
  let fixture: ComponentFixture<User.InfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ User.InfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(User.InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
