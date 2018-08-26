import { NgProjPage } from './app.po';

describe('ng-proj App', function() {
  let page: NgProjPage;

  beforeEach(() => {
    page = new NgProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
