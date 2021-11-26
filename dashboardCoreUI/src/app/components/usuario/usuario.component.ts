import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuarios = [];

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit()  {
    this.usuarioService.getUsuarios()
      //console.log(res);
      .subscribe(res => {

      this.usuarios = res;
      },
      err => console.log(err)
      )
      }


}
