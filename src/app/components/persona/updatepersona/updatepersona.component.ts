import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatepersona',
  templateUrl: './updatepersona.component.html',
  styleUrls: ['./updatepersona.component.css']
})
export class UpdatepersonaComponent implements OnInit {
  personas:any;
  persona:Persona=new Persona();

  constructor(private personaService:PersonaService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.cargarPersona();

  }
  cargarPersona():void{
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.personaService.getPersona(id).subscribe(
          (data)=>{
          this.personas=data['CURSOR_PERSONA'];
          this.persona.id_persona=this.personas[0].ID_PERSONA; 
          this.persona.nombre_persona=this.personas[0].NOMBRE_PERSONA;
          this.persona.apell_pat=this.personas[0].APELL_PAT;
          this.persona.apell_mat=this.personas[0].APELL_MAT;
          this.persona.dni=this.personas[0].DNI;
          this.persona.correo=this.personas[0].CORREO;
          this.persona.telefono=this.personas[0].TELEFONO;
          this.persona.fecha_nac=this.personas[0].FECHA_NAC;
          this.persona.sexo=this.personas[0].SEXO;
        })
      }
    })
  }

  modificarPersona():void{
    this.personaService.updatePersona(this.persona).subscribe(
      response=>{
        Swal.fire({
          title: 'Estas seguro?',
          text: "No podras revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, update it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/listar'])
            Swal.fire(
              'Actualizado!',
              'El registro ha sido Modificado.',
              'success'
            )
          }
        })    
    })
  }

}
