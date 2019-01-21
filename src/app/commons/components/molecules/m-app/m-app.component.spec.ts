import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAppComponent } from './m-app.component';



describe('MAppComponent', () => {
  let component: MAppComponent;
  let fixture: ComponentFixture<MAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
