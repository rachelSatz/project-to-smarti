import { Component, OnInit } from '@angular/core';

import { BusinessService } from '../business.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { business } from '../business';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: any;
  business:any;
  form:any;

  constructor(
    public businessService: BusinessService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idBusiness'];
    this.businessService.find(this.id).subscribe((data: business)=>{
      this.business = data;
    });

    this.form = new FormGroup({
      name:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      email: new FormControl('', [ Validators.required, Validators.email ]),
      phone: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ])
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.businessService.update(this.id, this.form.value).subscribe(res => {
         console.log('business updated successfully!');
         this.router.navigateByUrl('business/index');
    })
  }

}
