import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ActorDetalleComponent } from './actor-detalle.component';
import { GetOneActorByIdService } from './get-actor-detail-by-id.service';
import { Actor } from '../actor';
import { faker } from '@faker-js/faker';

describe('ActorDetalleComponent', () => {
  let component: ActorDetalleComponent;
  let fixture: ComponentFixture<ActorDetalleComponent>;
  let mockRoute: any;
  let mockGetOneActorByIdService: any;

  const mockActor: Actor = {
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    photo: faker.image.avatar(),
    nationality: faker.location.country(),
    birthDate: faker.date.past(),
    formattedBirthDate: faker.date.past().toLocaleDateString(),
    biography: faker.lorem.paragraph(),
  };

  beforeEach(() => {
    mockRoute = {
      snapshot: {
        paramMap: {
          get: () => '1',
        },
      },
    };

    mockGetOneActorByIdService = {
      oneActorWithId: () => of(mockActor),
    };

    TestBed.configureTestingModule({
      declarations: [ActorDetalleComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockRoute },
        { provide: GetOneActorByIdService, useValue: mockGetOneActorByIdService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ActorDetalleComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize actorDetail with data from service', () => {
    fixture.detectChanges();
    expect(component.actorDetail).toEqual(mockActor);
  });
  
  it('should render actor details in the template', () => {
    fixture.detectChanges();
    const actorName = document.getElementById('actor-name');
    const actorPhoto = document.getElementById('actor-photo');
    const actorNationality = document.getElementById('actor-nationality');
    const actorBirthdate = document.getElementById('actor-birthdate');
    const actorBiography = document.getElementById('actor-biography');
  
    expect(actorName !== null)
    expect(actorName!.textContent).toContain(mockActor.name);
    expect(actorPhoto!.getAttribute('src')).toBe(mockActor.photo);
    expect(actorNationality!.textContent).toBe(mockActor.nationality);
    expect(actorBirthdate!.textContent).toBe(mockActor.formattedBirthDate);
    expect(actorBiography!.textContent).toBe(mockActor.biography);
  });
  

});
