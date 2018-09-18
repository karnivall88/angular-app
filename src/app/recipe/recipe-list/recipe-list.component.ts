import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] =[
    new Recipe("Omelete","Omlete, bla bla lorem ipsum tasty trololo...","https://4.bp.blogspot.com/-mph6R7sy9Z4/TenP1192WQI/AAAAAAAAABY/FAguArAgxxg/s1600/Egg+omelet.jpg")
  ];
  constructor() { }

  ngOnInit()
  {


  }

}
