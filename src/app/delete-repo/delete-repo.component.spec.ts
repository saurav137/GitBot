import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRepoComponent } from './delete-repo.component';

describe('DeleteRepoComponent', () => {
  let component: DeleteRepoComponent;
  let fixture: ComponentFixture<DeleteRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
