import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-listarpersona',
  templateUrl: './listarpersona.component.html',
  styleUrls: ['./listarpersona.component.css']
})
export class ListarpersonaComponent implements OnInit {
  persona: Persona[];
  //displayedColumns : string[] = ['ID_PERSONA', 'NOMBRE_PERSONA', 'APELL_PAT', 'APELL_MAT', 'DNI', 'CORREO', 'TELEFONO', 'FECHA_NAC', 'SEXO']
  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {

    this.personaService.getPersona().subscribe(
      (data)=>{
        this.persona = data['cursor_persona'];
        alert(this.persona);
      }
    )
  }
}
