export interface IQuiz {
  name: string;
  threeSixNine: IThreeSixNineRound;
  puzzles: IPuzzleRound;
  gallery: IGalleryRound;
  collectiveMemory: ICollectiveMemoryRound;
  finals: Array<IFinaleQuestion>;
}

export interface IThreeSixNineQuestion {
  // TODO: Add youtube link for video or url for image
  question: string;
  answer: string;
}

export interface IThreeSixNineRound {
  1: IThreeSixNineQuestion;
  2: IThreeSixNineQuestion;
  3: IThreeSixNineQuestion;
  4: IThreeSixNineQuestion;
  5: IThreeSixNineQuestion;
  6: IThreeSixNineQuestion;
  7: IThreeSixNineQuestion;
  8: IThreeSixNineQuestion;
  9: IThreeSixNineQuestion;
  10: IThreeSixNineQuestion;
  11: IThreeSixNineQuestion;
  12: IThreeSixNineQuestion;
  13: IThreeSixNineQuestion;
  14: IThreeSixNineQuestion;
  15: IThreeSixNineQuestion;
}

export interface IPuzzleQuestion {
  answer: string;
  clue1: string;
  clue2: string;
  clue3: string;
  clue4: string;
}

export interface IPuzzle {
  1: IPuzzleQuestion;
  2: IPuzzleQuestion;
  3: IPuzzleQuestion;
}

export interface IPuzzleRound {
  firstPuzzle: IPuzzle;
  secondPuzzle: IPuzzle;
  thirdPuzzle: IPuzzle;
}

export interface IGalleryQuestion {
  photoUrl: string;
  answer: string;
}

export interface IGallery {
  name: string;
  1: IGalleryQuestion;
  2: IGalleryQuestion;
  3: IGalleryQuestion;
  4: IGalleryQuestion;
  5: IGalleryQuestion;
  6: IGalleryQuestion;
  7: IGalleryQuestion;
  8: IGalleryQuestion;
  9: IGalleryQuestion;
  10: IGalleryQuestion;
}

export interface IGalleryRound {
  firstGallery: IGallery;
  secondGallery: IGallery;
  thirdGallery: IGallery;
}

export interface ICollectiveMemoryQuestion {
  question: string;
  video: IVideo;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answer5: string;
}

export interface ICollectiveMemoryRound {
  firstVideo: ICollectiveMemoryQuestion;
  secondVideo: ICollectiveMemoryQuestion;
  thirdVideo: ICollectiveMemoryQuestion;
}

export interface IFinaleQuestion {
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answer5: string;
}

export interface IVideo {
  url: string;
  startFrom: string;
  numberOfSecondsToPlay: number;
}
