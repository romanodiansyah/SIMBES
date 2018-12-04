import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerandaMahasiswaComponent } from './beranda-mahasiswa.component';

describe('BerandaMahasiswaComponent', () => {
  let component: BerandaMahasiswaComponent;
  let fixture: ComponentFixture<BerandaMahasiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerandaMahasiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerandaMahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
