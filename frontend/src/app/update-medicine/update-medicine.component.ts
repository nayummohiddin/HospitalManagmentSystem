import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-update-medicine',
  standalone: false,
  
  templateUrl: './update-medicine.component.html',
  styleUrl: './update-medicine.component.css'
})
export class UpdateMedicineComponent {

  medicine:Medicine=new Medicine();

  id:number=0;

  constructor(private route:ActivatedRoute, private medicineServe:MedicineService, private router:Router){}

  ngOnInit():void{

    this.id=this.route.snapshot.params['id'];

    this.medicineServe.getMedicineById(this.id).subscribe(data=>{

      this.medicine=data;

    })
  }

  onSubmit(){

    this.medicineServe.updateMedicine(this.id,this.medicine).subscribe(data=>{
      console.log(data);
      this.goToMedicineList();

    })
  }

   goToMedicineList(){

    this.router.navigate(['view-medicine'])
   }

}
