import { StoreService } from './../core/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slq-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    if (this.storeService.store) {
      this.storeService.store
        .select(state => state.navigationState)
        .subscribe((navigation) => {
          console.log(navigation);
        });
    }
  }
}
