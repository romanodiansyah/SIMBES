import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBeasiswaComponent } from './list-beasiswa.component';

describe('ListBeasiswaComponent', () => {
  let component: ListBeasiswaComponent;
  let fixture: ComponentFixture<ListBeasiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBeasiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBeasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
