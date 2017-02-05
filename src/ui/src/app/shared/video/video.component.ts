import { IVideo, ICollectiveMemoryQuestion } from './../../core/models';
import { StoreService } from './../../core/store.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'slq-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, OnDestroy {
  @Input() showPlayer: boolean;

  playVideoSubscription;
  videoSubscription;

  player: YT.Player;
  videoId: string;
  question: ICollectiveMemoryQuestion;
  showVideo = false;
  showAnswers = false;

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.playVideoSubscription =
      this.storeService
        .store
        .select(state => state.quizState.video.startVideo)
        .subscribe(canPlay => {
          if (canPlay && this.player) {
            this.showVideo = true;
            this.player.playVideo();
            this.player.setSize(window.innerWidth, window.innerHeight);
          }
      });

      this.videoSubscription =
        this.storeService
          .store
          .select(state => state.quizState.video.video)
          .subscribe(question => {
              this.question = question;
              if (question) {
                this.videoId = question.video.youtubeId;
                if (this.player) {
                  this.loadVideo();
                }
              }
          });
  }

  savePlayer(player) {
    this.player = player;
    this.loadVideo();
  }

  loadVideo() {
    this.player.loadVideoById(this.videoId);
    this.player.seekTo(this.question.video.startFromSeconds, true);
    this.player.pauseVideo();
  }

  onStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING ) {
      setTimeout(() => {
        this.player.stopVideo();
        this.showVideo = false;
      }, this.question.video.numberOfSecondsToPlay * 1000);
    }
  }

  ngOnDestroy() {
    if (this.playVideoSubscription) {
      this.playVideoSubscription.unsubscribe();
    }

    if (this.videoSubscription) {
      this.videoSubscription.unsubscribe();
    }
  }
}
