import { SlimsteQuizPage } from './app.po';

describe('slimste-quiz App', function() {
  let page: SlimsteQuizPage;

  beforeEach(() => {
    page = new SlimsteQuizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
