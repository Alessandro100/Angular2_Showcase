import { StableReleasePage } from './app.po';

describe('stable-release App', function() {
  let page: StableReleasePage;

  beforeEach(() => {
    page = new StableReleasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
