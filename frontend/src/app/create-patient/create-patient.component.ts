import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-patient',
  standalone: false,
  
  templateUrl: './create-patient.component.html',
  styleUrl: './create-patient.component.css'
})
export class CreatePatientComponent {


  patient:Patient =new Patient();
  constructor(private patientService:PatientService,private router:Router){


  }
  savePatient(){
    this.patientService.createPatient(this.patient).subscribe(data=>{
      console.log(data);
      this.goTOPatientList();
    })
  }

  onSubmit(){

    this.savePatient();
  }
  goTOPatientList(){
    this.router.navigate(['/docdash'])
  }

}
