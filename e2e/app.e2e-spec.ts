import { NotesMapPage } from './app.po';

describe('notes-map App', () => {
  let page: NotesMapPage;

  beforeEach(() => {
    page = new NotesMapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
