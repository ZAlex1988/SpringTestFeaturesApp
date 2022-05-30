import { Component, OnInit } from '@angular/core';
import { ApisListServiceService } from '../../Services/apis-list-service.service';
import { ApiDescList } from '../../Models/api-desc-list.model';
import { ApiDesc } from "../../Models/api-desc.model"

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})


export class ListPageComponent implements OnInit {
  apis!: ApiDescList;
  constructor(private httpService: ApisListServiceService) { 
    this.apis = new ApiDescList();
  }

  ngOnInit(): void {
    this.getListOfApis();
  }

  getListOfApis(): void {
    console.log("Getting APIs...")
    this.httpService.getApisJson().subscribe({
      next: (v) => { 
        this.apis = v;
        console.log(v.count);
      },
      error: (e) => console.error(e),
      complete: () => console.log('complete!')
    });
  }

  // printEachApi(): void {
  //   for (let api of this.apis.entries) {
  //     console.log(api);
  //   }
  // }
}
