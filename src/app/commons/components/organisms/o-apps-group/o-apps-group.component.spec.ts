import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsgroupComponent } from './tools-group.component';

describe('ToolsgroupComponent', () => {
  let component: ToolsgroupComponent;
  let fixture: ComponentFixture<ToolsgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
