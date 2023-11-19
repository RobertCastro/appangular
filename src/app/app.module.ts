import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneroListaModule } from './genero/genero-lista/genero-lista.module';
import { GeneroDetalleModule } from './genero/genero-detalle/genero-detalle.module';
import { GeneroCrearModule } from './genero/genero-crear/genero-crear.module';
import { DirectorListaModule } from './director/director-lista/director-lista.module';
import { DirectorDetalleModule } from './director/director-detalle/director-detalle.module';
import { DirectorCrearModule } from './director/director-crear/director-crear.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ActorListaModule } from './actors/actor-lista/actor-lista.module';
import { ActorDetalleComponent } from './actors/actor-detalle/actor-detalle.component';
import { RouterModule } from '@angular/router';
import { PlataformaModule } from './plataforma/plataforma.module';
import { PlataformaAsociarPeliculaModule } from './plataforma/plataforma-asociar-pelicula/plataforma-asociar-pelicula.module';
@NgModule({
  declarations: [		
    AppComponent,
      NavbarComponent,
      FooterComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GeneroListaModule,
    GeneroDetalleModule,
    GeneroCrearModule,
    DirectorListaModule,
    DirectorDetalleModule,
    DirectorCrearModule,
    ActorListaModule,
    PlataformaModule,
    PlataformaAsociarPeliculaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
