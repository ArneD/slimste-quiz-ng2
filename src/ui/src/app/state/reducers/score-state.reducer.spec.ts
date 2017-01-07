import { IScoreState, IPlayerState } from './../../core/states';
import { scoreStateReducer } from './score-state.reducer';
import { ScoreUpdatePlayers } from '../actions/score-state';

let deepfreeze = require('deep-freeze');

describe('reduce score state', () => {
let initialState: IScoreState = {
    player1: {
      name: 'Player 1',
      score: 60,
      isSelected: true,
      hasPlayed: false
    },
    player2: {
      name: 'Player 2',
      score: 60,
      isSelected: false,
      hasPlayed: false
    },
    player3: {
      name: 'Player 3',
      score: 60,
      isSelected: false,
      hasPlayed: false
    }
};

  describe('case SCORE_UPDATE_PLAYERS', () => {
    it('returns a new instance with expected players', () => {
      let expectedPlayer1: IPlayerState = {
        name: 'First player',
        score: 70,
        isSelected: true,
        hasPlayed: true
      };

      let expectedPlayer2: IPlayerState = {
        name: 'Foo bar player',
        score: 90,
        isSelected: false,
        hasPlayed: false
      };

      let expectedPlayer3: IPlayerState = {
        name: 'Winner',
        score: 100,
        isSelected: false,
        hasPlayed: true
      };

      deepfreeze(initialState);

      let changedState: IScoreState = scoreStateReducer(initialState,
          new ScoreUpdatePlayers(expectedPlayer1, expectedPlayer2, expectedPlayer3));

      expect(changedState).not.toBe(initialState);
      expectPlayer(expectedPlayer1, changedState.player1);
      expectPlayer(expectedPlayer2, changedState.player2);
      expectPlayer(expectedPlayer3, changedState.player3);

      function expectPlayer(expectedPlayer: IPlayerState, player: IPlayerState) {
        expect(player.name).toBe(expectedPlayer.name);
        expect(player.score).toBe(expectedPlayer.score);
        expect(player.isSelected).toBe(expectedPlayer.isSelected);
        expect(player.hasPlayed).toBe(expectedPlayer.hasPlayed);
      }
    });
  });
});
