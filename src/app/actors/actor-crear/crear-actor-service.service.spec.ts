/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrearActorService } from './crear-actor-service.service';

describe('Service: CrearActorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrearActorService]
    });
  });

  it('should ...', inject([CrearActorService], (service: CrearActorService) => {
    expect(service).toBeTruthy();
  }));
});
