import { TestBed } from '@angular/core/testing';

import { LibrosSeleccionadosService } from './libros-seleccionados.service';

describe('LibrosSeleccionadosService', () => {
  let service: LibrosSeleccionadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosSeleccionadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
