import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathernewsComponent } from './weathernews.component';

describe('WeathernewsComponent', () => {
  let component: WeathernewsComponent;
  let fixture: ComponentFixture<WeathernewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeathernewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeathernewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
