import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.page.html',
  styleUrls: ['./single-item.page.scss'],
})
export class SingleItemPage implements OnInit {

  id: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    const data = this.route.snapshot.queryParams;
    console.log('queryParams: ', data);
    if(data?.data) {
      const currentObjectName = JSON.parse(data.data);
      console.log(currentObjectName.name);
    }
  }

}
