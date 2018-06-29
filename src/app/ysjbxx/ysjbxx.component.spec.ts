import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YsjbxxComponent } from './ysjbxx.component';

describe('YsjbxxComponent', () => {
  let component: YsjbxxComponent;
  let fixture: ComponentFixture<YsjbxxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YsjbxxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YsjbxxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
