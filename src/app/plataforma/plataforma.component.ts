import { Component, OnInit } from '@angular/core';
import { Plataforma } from './plataforma';
import { PlataformaService } from './plataforma.service';
@Component({
  selector: 'app-plataforma',
  templateUrl: './plataforma.component.html',
  styleUrls: ['./plataforma.component.css']
})
export class PlataformaComponent implements OnInit {

  plataformas: Array<Plataforma> = [];
  openAccordion: boolean[] = []
  constructor(private plataformaService: PlataformaService) { }

  getPlatforms() {
    this.plataformaService.getPlatforms().subscribe(plataformas => {
      this.plataformas = plataformas;
    });
  }
  
  
  ngOnInit() {
    this.getPlatforms();
  }

}
