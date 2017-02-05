import { IPuzzle, IGallery, IGalleryQuestion, IVideo, ICollectiveMemoryQuestion } from './../../core/models';
import { ActionTypes } from './../actions/quiz-state';
import { IQuizState } from './../../core/states';
import * as quiz from '../actions/quiz-state';

const initialState: IQuizState = {
    quizzes: [],
    threeSixNine: {
      numberOfQuestion: 0,
      question: {
        question: '',
        answer: ''
      }
    },
    puzzle: {
      puzzle: null,
      answered1: false,
      answered2: false,
      answered3: false
    },
    gallery: {
      gallery: null,
      galleryQuestionNumber: 0
    },
    video: {
      question: null,
      answered1: null,
      answered2: null,
      answered3: null,
      answered4: null,
      answered5: null,
      startVideo: false
    }
};

export function quizStateReducer(state: IQuizState = initialState, action: quiz.Actions): IQuizState {
  switch (action.type) {
    case quiz.ActionTypes.QUIZ_UPDATE_ALL:
      return {
        selectedQuiz: state.selectedQuiz,
        quizzes: action.payload.quizzes,
        threeSixNine: state.threeSixNine,
        puzzle: state.puzzle,
        gallery: state.gallery,
        video: state.video,
      };
    case quiz.ActionTypes.QUIZ_UPDATE_SELECTED:
      return {
        selectedQuiz: action.payload.quiz,
        quizzes: state.quizzes,
        threeSixNine: state.threeSixNine,
        puzzle: state.puzzle,
        gallery: state.gallery,
        video: state.video,
      };
    case quiz.ActionTypes.QUIZ_THREE_SIX_NINE_NEXT_QUESTION:
      let nextNumber = state.threeSixNine.numberOfQuestion + 1;
      if (!state.selectedQuiz || nextNumber > 15) {
        return {
          quizzes: state.quizzes,
          selectedQuiz: state.selectedQuiz,
          threeSixNine: {
            numberOfQuestion: 0,
            question: {
              question: null,
              answer: null
            }
          },
          puzzle: state.puzzle,
          gallery: state.gallery,
          video: state.video,
        };
      }
      return {
        quizzes: state.quizzes,
        selectedQuiz: state.selectedQuiz,
        threeSixNine: {
          numberOfQuestion: nextNumber,
          question: state.selectedQuiz.threeSixNine[nextNumber]
        },
        puzzle: state.puzzle,
        gallery: state.gallery,
        video: state.video,
      };
    case quiz.ActionTypes.QUIZ_PUZZLES_NEXT_PUZZLE:
      let puzzle: IPuzzle = null;
      if (!state.puzzle || !state.puzzle.puzzle) {
        puzzle = state.selectedQuiz.puzzles.firstPuzzle;
      } else if (state.puzzle.puzzle === state.selectedQuiz.puzzles.firstPuzzle) {
        puzzle = state.selectedQuiz.puzzles.secondPuzzle;
      } else if (state.puzzle.puzzle === state.selectedQuiz.puzzles.secondPuzzle) {
        puzzle = state.selectedQuiz.puzzles.thirdPuzzle;
      }

      return {
        quizzes: state.quizzes,
        selectedQuiz: state.selectedQuiz,
        threeSixNine: state.threeSixNine,
        puzzle: {
          puzzle: puzzle,
          answered1: false,
          answered2: false,
          answered3: false
        },
        gallery: state.gallery,
        video: state.video,
      };
    case quiz.ActionTypes.QUIZ_PUZZLES_ANSWERED_PUZZLE_QUESTION:
      let answered1 = state.puzzle.answered1;
      let answered2 = state.puzzle.answered2;
      let answered3 = state.puzzle.answered3;
      if (!state.puzzle.answered1 && state.puzzle.puzzle[1].answer === action.payload.answer) {
        answered1 = true;
      } else if (!state.puzzle.answered2 && state.puzzle.puzzle[2].answer === action.payload.answer) {
        answered2 = true;
      } else if (!state.puzzle.answered3 && state.puzzle.puzzle[3].answer === action.payload.answer) {
        answered3 = true;
      }

      return {
        quizzes: state.quizzes,
        selectedQuiz: state.selectedQuiz,
        threeSixNine: state.threeSixNine,
        puzzle: {
          puzzle: state.puzzle.puzzle,
          answered1: answered1,
          answered2: answered2,
          answered3: answered3,
        },
        gallery: state.gallery,
        video: state.video,
      };
    case quiz.ActionTypes.QUIZ_GALLERY_NEXT_GALLERY:
      let gallery: IGallery = null;
      if (!state.gallery || !state.gallery.gallery) {
        gallery = state.selectedQuiz.gallery.firstGallery;
      } else if (state.gallery.gallery === state.selectedQuiz.gallery.firstGallery) {
        gallery = state.selectedQuiz.gallery.secondGallery;
      } else if (state.gallery.gallery === state.selectedQuiz.gallery.secondGallery) {
        gallery = state.selectedQuiz.gallery.thirdGallery;
      }

      return {
        quizzes: state.quizzes,
        selectedQuiz: state.selectedQuiz,
        threeSixNine: state.threeSixNine,
        puzzle: state.puzzle,
        gallery: {
          gallery: gallery,
          galleryQuestionNumber: 0
        },
        video: state.video,
      };
    case quiz.ActionTypes.QUIZ_GALLERY_NEXT_GALLERY_QUESTION:
      let number = state.gallery.galleryQuestionNumber;
      if (number < 10) {
        number = number + 1;
      } else {
        number = 0;
      }

      return {
        quizzes: state.quizzes,
        selectedQuiz: state.selectedQuiz,
        threeSixNine: state.threeSixNine,
        puzzle: state.puzzle,
        gallery: {
          gallery: state.gallery.gallery,
          galleryQuestionNumber: number
        },
        video: state.video,
      };
    case quiz.ActionTypes.QUIZ_VIDEO_NEXT_VIDEO:
      let video: ICollectiveMemoryQuestion = null;
      if (!state.video || !state.video.question) {
        video = state.selectedQuiz.collectiveMemory.firstVideo;
      } else if (state.video.question === state.selectedQuiz.collectiveMemory.firstVideo) {
        video = state.selectedQuiz.collectiveMemory.secondVideo;
      } else if (state.video.question === state.selectedQuiz.collectiveMemory.secondVideo) {
        video = state.selectedQuiz.collectiveMemory.thirdVideo;
      }

      return {
        quizzes: state.quizzes,
        selectedQuiz: state.selectedQuiz,
        threeSixNine: state.threeSixNine,
        puzzle: state.puzzle,
        gallery: state.gallery,
        video: {
          question: video,
          answered1: null,
          answered2: null,
          answered3: null,
          answered4: null,
          answered5: null,
          startVideo: false
        },
      };
    case quiz.ActionTypes.QUIZ_VIDEO_PLAY_VIDEO:
      return {
        quizzes: state.quizzes,
        selectedQuiz: state.selectedQuiz,
        threeSixNine: state.threeSixNine,
        puzzle: state.puzzle,
        gallery: state.gallery,
        video: {
          question: state.video.question,
          answered1: state.video.answered1,
          answered2: state.video.answered2,
          answered3: state.video.answered3,
          answered4: state.video.answered4,
          answered5: state.video.answered5,
          startVideo: true
        },
      };
    default:
      return state;
  }
};
