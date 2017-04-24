import { JoesAppPage } from './app.po';

describe('joes-app App', () => {
  let page: JoesAppPage;

  beforeEach(() => {
    page = new JoesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
