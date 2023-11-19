import { TestBed, async, inject } from '@angular/core/testing';
import { DirectorListaService } from './director-lista.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Director', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DirectorListaService]
    });
  });

  it('should ...', inject([DirectorListaService], (service: DirectorListaService) => {
    expect(service).toBeTruthy();
  }));
});
