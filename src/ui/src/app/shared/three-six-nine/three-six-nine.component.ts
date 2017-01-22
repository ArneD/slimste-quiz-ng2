import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from './../../core/store.service';

@Component({
  selector: 'slq-three-six-nine',
  templateUrl: './three-six-nine.component.html',
  styleUrls: ['./three-six-nine.component.scss']
})
export class ThreeSixNineComponent implements OnInit, OnDestroy {
  selectedNr; //= this.storeService.store.select(state => state.quizState.threeSixNine.numberOfQuestion);
  name = new Date().getMilliseconds();

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    console.log(this.storeService);
    this.storeService.store.select(state => state.quizState.threeSixNine).subscribe(three => {
      this.selectedNr = three.numberOfQuestion;
      console.log(this.name + this.selectedNr);
    });
  }

  ngOnDestroy() {

  }
}
