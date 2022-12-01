import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoalumnosComponent } from './listadoalumnos.component';

describe('ListadoalumnosComponent', () => {
  let component: ListadoalumnosComponent;
  let fixture: ComponentFixture<ListadoalumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoalumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
