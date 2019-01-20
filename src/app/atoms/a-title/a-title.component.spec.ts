import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ATitleComponent } from './a-title.component';



describe('ATitleComponent', () => {
  let component: ATitleComponent;
  let fixture: ComponentFixture<ATitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ATitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ATitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
