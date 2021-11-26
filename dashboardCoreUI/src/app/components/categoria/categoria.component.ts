import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categorias = [];

  constructor(private categoriaService: CategoriasService) { }

  ngOnInit() {

    this.categoriaService.getCategorias()
      //console.log(res)
      .subscribe(res => {
        this.categorias = res;
      },
        err => console.log(err)
      )
  }

}
