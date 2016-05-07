export class SchoolListPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('school-list-app h1')).getText();
  }
}
