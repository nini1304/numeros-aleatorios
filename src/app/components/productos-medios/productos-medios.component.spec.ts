import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosMediosComponent } from './productos-medios.component';

describe('ProductosMediosComponent', () => {
  let component: ProductosMediosComponent;
  let fixture: ComponentFixture<ProductosMediosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosMediosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosMediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
