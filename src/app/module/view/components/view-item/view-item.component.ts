import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent implements OnInit {
  product_id: string;
  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.product_id = this.actRoute.snapshot.params.id;
  }

}
