import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DirectorDetalleComponent } from './director-detalle.component';
import { DirectorDetalleService } from './director-detalle.service';
import { Director } from '../director';
import { faker } from '@faker-js/faker';

describe('DirectorDetalleComponent', () => {
  let component: DirectorDetalleComponent;
  let fixture: ComponentFixture<DirectorDetalleComponent>;
  let mockRoute: any;
  let mockDirectorService: any;
  let el: HTMLElement;

  const mockDirector: Director = {
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

    mockDirectorService = {
      getDirectorById: () => of(mockDirector),
    };

    TestBed.configureTestingModule({
      declarations: [DirectorDetalleComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockRoute },
        { provide: DirectorDetalleService, useValue: mockDirectorService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectorDetalleComponent);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize director with data from service', () => {
    fixture.detectChanges();
    expect(component.director).toEqual(mockDirector);
  });

  it('should display all director details in the template', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
  
      const nameElement = el.querySelector('.name');
      const photoElement = el.querySelector('.photo') as HTMLImageElement;
      const nationalityElement = el.querySelector('.nationality p');
      const biographyElement = el.querySelector('.biography');
  
      expect(nameElement).withContext('Name element should exist').toBeTruthy();
      expect(nameElement?.textContent).withContext('Name should be rendered in the template').toContain(mockDirector.name);
  
      expect(photoElement).withContext('Photo element should exist').toBeTruthy();
      expect(photoElement?.src).withContext('Photo src should be set to the director\'s photo URL').toContain(mockDirector.photo);
  
      expect(nationalityElement).withContext('Nationality element should exist').toBeTruthy();
      expect(nationalityElement?.textContent).withContext('Nationality should be rendered in the template').toContain(mockDirector.nationality);
  
      expect(biographyElement).withContext('Biography element should exist').toBeTruthy();
      expect(biographyElement?.textContent).withContext('Biography should be rendered in the template').toContain(mockDirector.biography);
    });
  });
  
  


});
