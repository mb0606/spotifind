import { MusicAppRoutingNgbookPage } from './app.po';

describe('music-app-routing-ngbook App', function() {
  let page: MusicAppRoutingNgbookPage;

  beforeEach(() => {
    page = new MusicAppRoutingNgbookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
