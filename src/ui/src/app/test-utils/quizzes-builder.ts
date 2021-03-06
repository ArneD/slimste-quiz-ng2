import { IQuiz } from './../../core/models';

export class QuizzesBuilder {
  public constructor() {}

  public createQuizzes(): Array<IQuiz> {
    return [
    {
      name: 'quiz1',
      threeSixNine: {
        1: {
          question: 'Wat is?',
          answer: 'Dat'
        },
        2: {
          question: 'Wat is?',
          answer: 'Dat'
        },
        3: {
          question: 'Wat is?',
          answer: 'Dat'
        },
        4: {
          question: 'Wat is?',
          answer: 'Dat'
        },
        5: {
          question: 'Wat is?',
          answer: 'Dat'
        },
        6: {
          question: 'Wat is?',
          answer: 'Dat'
        },
        7: {
          question: 'Wat is?',
          answer: 'Dat'
        },
        8: {
          question: 'Wat is?',
          answer: 'Dat'
        },
        9: {
          question: 'Wat is?',
          answer: 'Dat'
        },
        10: {
          question: 'Wat is?',
          answer: 'Dat'
        },
        11: {
          question: 'Wat is?',
          answer: 'Dat'
        },
        12: {
          question: 'Wat is?',
          answer: 'Dat'
        },
        13: {
          question: 'Wat is?',
          answer: 'Dat'
        },
        14: {
          question: 'Wat is?',
          answer: 'Dat'
        },
        15: {
          question: 'Wat is?',
          answer: 'Dat'
        }
      },
      puzzles: {
        firstPuzzle: {
          1: {
            answer: 'Antwoord 1',
            clue1: 'Clue 1',
            clue2: 'Clue 2',
            clue3: 'Clue 3',
            clue4: 'Clue 4'
          },
          2: {
            answer: 'Antwoord 2',
            clue1: 'Clue 1',
            clue2: 'Clue 2',
            clue3: 'Clue 3',
            clue4: 'Clue 4'
          },
          3: {
            answer: 'Antwoord 3',
            clue1: 'Clue 1',
            clue2: 'Clue 2',
            clue3: 'Clue 3',
            clue4: 'Clue 4'
          }
        },
        secondPuzzle: {
          1: {
            answer: 'Antwoord',
            clue1: 'Clue 1',
            clue2: 'Clue 2',
            clue3: 'Clue 3',
            clue4: 'Clue 4'
          },
          2: {
            answer: 'Antwoord',
            clue1: 'Clue 1',
            clue2: 'Clue 2',
            clue3: 'Clue 3',
            clue4: 'Clue 4'
          },
          3: {
            answer: 'Antwoord',
            clue1: 'Clue 1',
            clue2: 'Clue 2',
            clue3: 'Clue 3',
            clue4: 'Clue 4'
          }
        },
        thirdPuzzle: {
          1: {
            answer: 'Antwoord',
            clue1: 'Clue 1',
            clue2: 'Clue 2',
            clue3: 'Clue 3',
            clue4: 'Clue 4'
          },
          2: {
            answer: 'Antwoord',
            clue1: 'Clue 1',
            clue2: 'Clue 2',
            clue3: 'Clue 3',
            clue4: 'Clue 4'
          },
          3: {
            answer: 'Antwoord',
            clue1: 'Clue 1',
            clue2: 'Clue 2',
            clue3: 'Clue 3',
            clue4: 'Clue 4'
          }
        }
      },
      gallery: {
        firstGallery: {
          name: 'Popstars',
          1: {
            photoUrl: '',
            answer: ''
          },
          2: {
            photoUrl: '',
            answer: ''
          },
          3: {
            photoUrl: '',
            answer: ''
          },
          4: {
            photoUrl: '',
            answer: ''
          },
          5: {
            photoUrl: '',
            answer: ''
          },
          6: {
            photoUrl: '',
            answer: ''
          },
          7: {
            photoUrl: '',
            answer: ''
          },
          8: {
            photoUrl: '',
            answer: ''
          },
          9: {
            photoUrl: '',
            answer: ''
          },
          10: {
            photoUrl: '',
            answer: ''
          }
        },
        secondGallery: {
          name: 'Popstars',
          1: {
            photoUrl: '',
            answer: ''
          },
          2: {
            photoUrl: '',
            answer: ''
          },
          3: {
            photoUrl: '',
            answer: ''
          },
          4: {
            photoUrl: '',
            answer: ''
          },
          5: {
            photoUrl: '',
            answer: ''
          },
          6: {
            photoUrl: '',
            answer: ''
          },
          7: {
            photoUrl: '',
            answer: ''
          },
          8: {
            photoUrl: '',
            answer: ''
          },
          9: {
            photoUrl: '',
            answer: ''
          },
          10: {
            photoUrl: '',
            answer: ''
          }
        },
        thirdGallery: {
          name: 'Popstars',
          1: {
            photoUrl: '',
            answer: ''
          },
          2: {
            photoUrl: '',
            answer: ''
          },
          3: {
            photoUrl: '',
            answer: ''
          },
          4: {
            photoUrl: '',
            answer: ''
          },
          5: {
            photoUrl: '',
            answer: ''
          },
          6: {
            photoUrl: '',
            answer: ''
          },
          7: {
            photoUrl: '',
            answer: ''
          },
          8: {
            photoUrl: '',
            answer: ''
          },
          9: {
            photoUrl: '',
            answer: ''
          },
          10: {
            photoUrl: '',
            answer: ''
          }
        }
      },
      collectiveMemory: {
        firstVideo: {
          question: 'Wat is?',
          video: {
            url: '',
            startFrom: '',
            numberOfSecondsToPlay: 0
          },
          answer1: '',
          answer2: '',
          answer3: '',
          answer4: '',
          answer5: ''
        },
        secondVideo: {
          question: 'Wat is?',
          video: {
            url: '',
            startFrom: '',
            numberOfSecondsToPlay: 0
          },
          answer1: '',
          answer2: '',
          answer3: '',
          answer4: '',
          answer5: ''
        },
        thirdVideo: {
          question: 'Wat is?',
          video: {
            url: '',
            startFrom: '',
            numberOfSecondsToPlay: 0
          },
          answer1: '',
          answer2: '',
          answer3: '',
          answer4: '',
          answer5: ''
        }
      },
      finals: [
        {
          question: 'Wat is?',
          answer1: 'Antwoord 1',
          answer2: 'Antwoord 2',
          answer3: 'Antwoord 3',
          answer4: 'Antwoord 4',
          answer5: 'Antwoord 5'
        },
        {
          question: 'Wat is?',
          answer1: 'Antwoord 1',
          answer2: 'Antwoord 2',
          answer3: 'Antwoord 3',
          answer4: 'Antwoord 4',
          answer5: 'Antwoord 5'
        }
      ]
    }];
  }
}
