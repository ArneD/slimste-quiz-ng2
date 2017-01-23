import { Router } from '@angular/router';
import { StoreService } from './../core/store.service';
import { Component, OnInit } from '@angular/core';
import { NavigationType } from './../core/models';

@Component({
  selector: 'slq-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(private storeService: StoreService, private router: Router) { }

  ngOnInit() {
    if (this.storeService.store) {
      this.storeService.store
        .select(state => state.navigationState)
        .subscribe((navigation) => {
          switch (navigation.navigationType) {
            case NavigationType.ThreeSixNine:
              this.router.navigate(['/client/three-six-nine']);
              break;
            case NavigationType.Puzzles:
              this.router.navigate(['/client/puzzles']);
              break;
            default:
              this.router.navigate(['/client/setup']);
              break;
          }
        });
    }
  }
}
