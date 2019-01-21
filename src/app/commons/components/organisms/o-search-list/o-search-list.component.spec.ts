import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OSearchListComponent } from './o-search-list.component';



describe('OSearchListComponent', () => {
  let component: OSearchListComponent;
  let fixture: ComponentFixture<OSearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OSearchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
