import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-addpersona',
  templateUrl: './addpersona.component.html',
  styleUrls: ['./addpersona.component.css']
})
export class AddpersonaComponent implements OnInit {
  personaModel:Persona = new Persona();
  constructor(private personaService:PersonaService,
    private router: Router, private activatedRoute:ActivatedRoute) { }
  
  ngOnInit():void{}
  public create(): void {
    this.personaService.addPersona(this.personaModel).subscribe(
      reponse=>{
        this.router.navigate(['/listar'])
        Swal.fire('Nueva Persona', `Persona ${this.personaModel.NOMBRE_PERSONA, this.personaModel.APELL_PAT, this.personaModel.APELL_MAT, this.personaModel.DNI, this.personaModel.CORREO, this.personaModel.TELEFONO, this.personaModel.FECHA_NAC, this.personaModel.SEXO} 'creado con exito`,'success');
      })
  }
}
