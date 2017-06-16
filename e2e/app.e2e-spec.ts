import { OfficinaAppPage } from './app.po';

describe('officina-app App', () => {
  let page: OfficinaAppPage;

  beforeEach(() => {
    page = new OfficinaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
