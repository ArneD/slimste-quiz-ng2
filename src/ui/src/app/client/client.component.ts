import { ClientStoreService } from './../core/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slq-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  providers: [ClientStoreService]
})
export class ClientComponent implements OnInit {

  constructor(private storeService: ClientStoreService) { }

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
