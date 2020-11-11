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
    console.log(this.personaModel)
    this.personaService.addPersona(this.personaModel).subscribe(
      reponse=>{
        this.router.navigate(['/listar'])
        Swal.fire('Nueva Persona', `Persona ${this.personaModel.nombre_persona,this.personaModel.apell_pat, this.personaModel.apell_mat} 'creado con exito`,'success');
      })
  }
}
