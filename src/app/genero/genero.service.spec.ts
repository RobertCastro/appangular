/* este servicio sirve tanto para la fucionalidad de lsitar como la de detallar */

import { TestBed, async, inject } from '@angular/core/testing';
import { GeneroService } from './genero.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Genero', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GeneroService]
    });
  });

  it('should ...', inject([GeneroService], (service: GeneroService) => {
    expect(service).toBeTruthy();
  }));
});
