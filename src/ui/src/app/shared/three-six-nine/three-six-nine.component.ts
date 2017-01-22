import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from './../../core/client.service';

@Component({
  selector: 'slq-three-six-nine',
  templateUrl: './three-six-nine.component.html',
  styleUrls: ['./three-six-nine.component.scss']
})
export class ThreeSixNineComponent implements OnInit, OnDestroy {
  selectedNr = this.storeService.store.select(state => state.quizState.threeSixNine.numberOfQuestion);
  constructor(private storeService: StoreService) { }

  ngOnInit() {

  }

  ngOnDestroy() {

  }
}
