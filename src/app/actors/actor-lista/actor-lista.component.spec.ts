import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { async } from "rxjs";
import { ActorListaComponent } from "./actor-lista.component";
import { DebugElement } from "@angular/core";
import { Actor } from "../actor";
import { faker } from '@faker-js/faker';
import { By } from "@angular/platform-browser";


describe('ActorListaComponent', () => {
    let component: ActorListaComponent;
    let fixture: ComponentFixture<ActorListaComponent>;
    let debug: DebugElement;

beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ActorListaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorListaComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 10; i++) {
      const actor = new Actor(
        faker.string.uuid(),
        faker.person.firstName(),
        faker.image.avatar(),
        faker.location.country(),
        faker.date.past(),
        faker.date.past().toLocaleDateString(),
        faker.lorem.paragraph());
      component.actores.push(actor);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });


  it('should create the component ActorListaComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have 10 rows of rendered actors', () => {
    const rows = debug.queryAll(By.css('tbody > tr'));
    expect(rows).toHaveSize(10);
  });

  it('the first row with an actor should have a link around the actor\'s photo', () => {
    const linkWithImage = debug.query(By.css('tbody > tr:first-child > th > a > img'));
    expect(linkWithImage).toBeTruthy();
  });

  it('should display actor photo, name, nationality, and birthdate', () => {
    const rows = debug.queryAll(By.css('tbody > tr'));
    for (let i = 0; i < rows.length; i++) {
      const columns = rows[i].queryAll(By.css('th'));
      const image = columns[0].query(By.css('img'));

      const name = columns[1].nativeElement.textContent.trim();
      const nationality = columns[2].nativeElement.textContent.trim();
      const birthdate = columns[3].nativeElement.textContent.trim();

      expect(image.nativeElement.src).toContain(component.actores[i].photo);
      expect(name).toEqual(component.actores[i].name);
      expect(nationality).toEqual(component.actores[i].nationality);
      expect(birthdate).toEqual(component.actores[i].formattedBirthDate);
    }
  });

});