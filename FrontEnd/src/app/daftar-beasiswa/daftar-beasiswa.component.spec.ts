import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarBeasiswaComponent } from './daftar-beasiswa.component';

describe('DaftarBeasiswaComponent', () => {
  let component: DaftarBeasiswaComponent;
  let fixture: ComponentFixture<DaftarBeasiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarBeasiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarBeasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
