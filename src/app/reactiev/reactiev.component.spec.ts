import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactievComponent } from './reactiev.component';

describe('ReactievComponent', () => {
  let component: ReactievComponent;
  let fixture: ComponentFixture<ReactievComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactievComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactievComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
