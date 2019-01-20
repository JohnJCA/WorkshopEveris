import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharagraphComponent } from './pharagraph.component';

describe('PharagraphComponent', () => {
  let component: PharagraphComponent;
  let fixture: ComponentFixture<PharagraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharagraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
