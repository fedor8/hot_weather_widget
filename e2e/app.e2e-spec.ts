import { HotWeatherWidgetPage } from './app.po';

describe('hot-weather-widget App', function() {
  let page: HotWeatherWidgetPage;

  beforeEach(() => {
    page = new HotWeatherWidgetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
