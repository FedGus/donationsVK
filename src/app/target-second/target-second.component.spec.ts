import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetSecondComponent } from './target-second.component';

describe('TargetSecondComponent', () => {
  let component: TargetSecondComponent;
  let fixture: ComponentFixture<TargetSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
