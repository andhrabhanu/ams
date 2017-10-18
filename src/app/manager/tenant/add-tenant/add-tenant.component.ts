import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import { TenantService } from '../service/tenant.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-add-tenant',
  templateUrl: './add-tenant.component.html',
  styleUrls: ['./add-tenant.component.css']
})
export class AddTenantComponent implements OnInit {
        public managerID:any; public response:any; public status:any; public msgresponse:any;
  
  
  constructor(public tenantService : TenantService,public snackBar: MdSnackBar) {
        var manager = localStorage.getItem('manager');
        console.log('Manager UserType')
        var parsing_manager  = JSON.parse(manager);
        this.managerID = parsing_manager._id;
        console.log('Manager Id'+ this.managerID)  
   }

          firstName = new FormControl('', [
                  Validators.required,
                  ]); 
        
          lastName = new FormControl('', [
                  Validators.required
                  ]);
          email = new FormControl('', [
                  Validators.required,
                 // Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
                  ]);

          password = new FormControl('', [
                  Validators.required
                  ]);
          primary_phone = new FormControl('', [
                  Validators.required
                  ]);         
          
          
          alt_phone = new FormControl('', [
                  Validators.required
                  ]);

        //Database Values 
        tenantForm = new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password:this.password,
        primary_phone: this.primary_phone,
        alt_phone:this.alt_phone
        })

        ngOnInit() {
      }
        onFormSubmit(): void {
          
              let tenant_details = {
          managerId: this.managerID,    
          firstName: this.tenantForm.get('firstName').value,
          lastName: this.tenantForm.get('lastName').value,
          email: this.tenantForm.get('email').value,
          password: this.tenantForm.get('password').value,
          primary_phone: this.tenantForm.get('primary_phone').value,
          alt_phone:this.tenantForm.get('primary_phone').value,
                //role: this.role
            };

            console.log(JSON.stringify(tenant_details,null,4));
           /*      this.tenantService.addTenant(tenant_details)
                .subscribe(()=> this.goBack()) */

               this.tenantService.addTenant(tenant_details).then((data) => {
                         this.response = data;
                         console.log(this.response);

                         this.status  = this.response.Status
                         if(this.status=="Success"){
                                var message = 'Tenant Created'
                                this.openSnackBar(message);   
                         }
                         if(this.status=="Failed"){
                                this.msgresponse = this.response.Message 
                                this.openSnackBar(this.msgresponse);
                        }

                         
                       
                           

                           
                           
                           
 
                           }, (err) => {
                             console.log(err);
                             var message = 'Failed Creating'
                             this.openSnackBar(message)
                           });
    }  
    goBack(){
            console.log('Going Back...');
    }
    openSnackBar(message) {
        this.snackBar.open(message, 'Close', { duration: 5000});
    }     

}
