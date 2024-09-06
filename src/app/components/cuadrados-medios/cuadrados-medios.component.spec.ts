import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadradosMediosComponent } from './cuadrados-medios.component';

describe('CuadradosMediosComponent', () => {
  let component: CuadradosMediosComponent;
  let fixture: ComponentFixture<CuadradosMediosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuadradosMediosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadradosMediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
