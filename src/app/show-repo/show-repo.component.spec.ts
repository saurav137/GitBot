import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRepoComponent } from './show-repo.component';

describe('ShowRepoComponent', () => {
  let component: ShowRepoComponent;
  let fixture: ComponentFixture<ShowRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
