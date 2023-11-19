import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { GetAllActorsService } from './get-all-actor.service';

describe('GetAllActorsService', () => {
  let apiUrl = environment.baseUrl + '/actors';
  let service: GetAllActorsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetAllActorsService]
    });
    service = TestBed.inject(GetAllActorsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should return a list of actors', () => {

    service.actors().subscribe(actors => {
      expect(actors.length>0)
    });

    const req = httpTestingController.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');

  });
});