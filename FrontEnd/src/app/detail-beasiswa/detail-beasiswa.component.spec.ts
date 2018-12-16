import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBeasiswaComponent } from './detail-beasiswa.component';

describe('DetailBeasiswaComponent', () => {
  let component: DetailBeasiswaComponent;
  let fixture: ComponentFixture<DetailBeasiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBeasiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBeasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
