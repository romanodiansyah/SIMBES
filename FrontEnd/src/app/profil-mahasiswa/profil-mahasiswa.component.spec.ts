import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilMahasiswaComponent } from './profil-mahasiswa.component';

describe('ProfilMahasiswaComponent', () => {
  let component: ProfilMahasiswaComponent;
  let fixture: ComponentFixture<ProfilMahasiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilMahasiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilMahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
