import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRepoComponent } from './create-repo.component';

describe('CreateRepoComponent', () => {
  let component: CreateRepoComponent;
  let fixture: ComponentFixture<CreateRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
