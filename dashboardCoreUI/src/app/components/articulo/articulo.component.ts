import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service'

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  articulos = [];

  constructor(private articuloService: ArticulosService) { }

  ngOnInit()  {
     
    this.articuloService.getArticulos()
      //console.log(res);
      .subscribe(res => {
        this.articulos = res;
      },
        err => console.log(err)
      )
  }

}
