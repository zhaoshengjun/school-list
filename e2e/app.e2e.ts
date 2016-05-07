import { SchoolListPage } from './app.po';

describe('school-list App', function() {
  let page: SchoolListPage;

  beforeEach(() => {
    page = new SchoolListPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('school-list works!');
  });
});
