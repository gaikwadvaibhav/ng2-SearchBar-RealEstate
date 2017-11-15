import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppropertyComponent } from './topproperty.component';

describe('ToppropertyComponent', () => {
  let component: ToppropertyComponent;
  let fixture: ComponentFixture<ToppropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToppropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
