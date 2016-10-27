import { LetsMapItPage } from './app.po';

describe('lets-map-it App', function() {
  let page: LetsMapItPage;

  beforeEach(() => {
    page = new LetsMapItPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
