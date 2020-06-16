import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklibraryapiComponent } from './booklibraryapi.component';

describe('BooklibraryapiComponent', () => {
  let component: BooklibraryapiComponent;
  let fixture: ComponentFixture<BooklibraryapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooklibraryapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooklibraryapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
