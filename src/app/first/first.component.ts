import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() {
    this.name = 'First name';
    this.description = 'First description';
    this.price = 100500.50;
    this.category = Categories.Category2;
    this.isAvaliable = false;
  }

  public name: string;
  public description: string;
  public price: number;
  public category: Categories;
  public isAvaliable: boolean;

  ngOnInit(): void {
  }

}

export enum Categories {
  Category1,
  Category2,
}
