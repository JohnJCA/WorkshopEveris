import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ALinkComponent } from './a-link.component';



describe('LinkComponent', () => {
  let component: ALinkComponent;
  let fixture: ComponentFixture<ALinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ALinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ALinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
