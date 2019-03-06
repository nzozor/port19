import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlinePanelComponent } from './headline-panel.component';

describe('HeadlinePanelComponent', () => {
  let component: HeadlinePanelComponent;
  let fixture: ComponentFixture<HeadlinePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlinePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlinePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
