describe('carrers section search functionality testing', () => {
  browser.waitForAngularEnabled(false);

  it('should verify the page title is correct', () => {
    browser.get('https://www.digarc.com/');
    expect(browser.getTitle()).toContain('Connected Curriculum');
  });

  it('should click carreer link and verify user is redirected to carreer page', () => {
    element(by.css('li[id="menu-item-66"] > a')).click();
    expect(element(by.css('h1.title')).getText()).toEqual('Careers');
  });

  it('should populate keyword box and successfully submit search request', () => {
    element(by.id('search_keywords')).sendKeys('ASSOCIATE');
    browser.sleep(1000);
    element(by.id('search_keywords')).sendKeys(protractor.Key.ENTER);
    browser.sleep(1000);
  });

  it('should verify search has been completed and results are displayed', () => {
    expect(element(by.css('div.showing_jobs > span')).getText()).toContain('Search completed');
    browser.close();
  });
});
