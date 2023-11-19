import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GetOneActorByIdService } from './get-actor-detail-by-id.service';
import { Actor } from '../actor';
import { environment } from 'src/environments/environment';
import { faker } from '@faker-js/faker';

describe('GetOneActorByIdService', () => {
  let service: GetOneActorByIdService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetOneActorByIdService],
    });

    service = TestBed.inject(GetOneActorByIdService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve an actor by ID', () => {
    const actorId = faker.string.uuid();
    const mockActor: Actor = {
      id: actorId,
      name: faker.person.firstName(),
      photo: faker.image.avatar(),
      nationality: faker.location.country(),
      birthDate: faker.date.past(),
      biography: faker.lorem.paragraph(),
      formattedBirthDate: faker.date.past().toLocaleDateString(),
    };

    service.oneActorWithId(actorId).subscribe((actor) => {
      expect(actor).toEqual(mockActor);
    });

    const req = httpTestingController.expectOne(`${environment.baseUrl}/actors/${actorId}`);
    expect(req.request.method).toEqual('GET');

    req.flush(mockActor);

    httpTestingController.verify();
  });
});
