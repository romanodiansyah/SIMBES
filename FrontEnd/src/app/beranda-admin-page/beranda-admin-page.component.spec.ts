import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerandaAdminPageComponent } from './beranda-admin-page.component';

describe('BerandaAdminPageComponent', () => {
  let component: BerandaAdminPageComponent;
  let fixture: ComponentFixture<BerandaAdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerandaAdminPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerandaAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
