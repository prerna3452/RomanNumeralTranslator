import { RomannumeraltranslatorPage } from './app.po';

describe('romannumeraltranslator App', function() {
  let page: RomannumeraltranslatorPage;

  beforeEach(() => {
    page = new RomannumeraltranslatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
