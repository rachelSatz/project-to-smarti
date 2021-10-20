import { Component, OnInit } from '@angular/core';

import { BusinessService } from '../business.service';
import { business } from '../business';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  business: business[] = [];

  // constructor() { }
  constructor(public businessService: BusinessService) { }

  ngOnInit(): void {
    this.businessService.getAll().subscribe((data: business[]) => {
      this.business = data;
      console.log(this.business);
    })
  }

  deleteBusiness(id: number) {
    this.businessService.delete(id).subscribe(res => {
      this.business = this.business.filter(item => item.id !== id);
      console.log('business deleted successfully!');
    })
  }

}
