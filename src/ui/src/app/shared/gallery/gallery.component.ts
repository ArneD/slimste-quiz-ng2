import { StoreService } from './../../core/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slq-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  gallery$ = this.storeService.store.select(state => state.quizState.gallery.gallery);
  photoNumber$ = this.storeService.store.select(state => state.quizState.gallery.galleryQuestionNumber);

  constructor(private storeService: StoreService) { }

  ngOnInit() {
  }

}
