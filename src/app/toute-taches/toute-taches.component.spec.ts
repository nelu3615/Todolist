import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouteTachesComponent } from './toute-taches.component';

describe('TouteTachesComponent', () => {
  let component: TouteTachesComponent;
  let fixture: ComponentFixture<TouteTachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouteTachesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TouteTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
