import { TestBed, async, inject } from '@angular/core/testing';
import { DirectorDetalleService } from './director-detalle.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: DirectorDetalle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DirectorDetalleService]
    });
  });

  it('should ...', inject([DirectorDetalleService], (service: DirectorDetalleService) => {
    expect(service).toBeTruthy();
  }));
});
