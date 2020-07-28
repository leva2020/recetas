import {Component, OnInit, Input} from '@angular/core'

@Component({
  selector: 'app-detail-recipe',
  templateUrl: './detail-recipe.component.html',
})
export class DetailRecipeComponent implements OnInit {

  @Input() recipe;

  constructor() {
  }

  ngOnInit() {}
}
