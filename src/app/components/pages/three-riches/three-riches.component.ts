import {Component, OnInit} from '@angular/core'
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './three-riches.component.html',
  styleUrls: ['./three-riches.component.scss'],
})
export class ThreeRichesComponent implements OnInit {

  constructor(public data: DataService) {
  }

  ngOnInit() {}
}
