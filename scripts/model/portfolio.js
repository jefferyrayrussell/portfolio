(function(module){

  function PortfolioItem (project){
    for (key in project) {
      this[key] = project[key];
    };
  };

  PortfolioItem.all = [];

  PortfolioItem.prototype.toHtml = function() {
    var template = Handlebars.compile($('#project-template').text());
    return template(this);
  };

  PortfolioItem.prototype.filterTitleToHtml = function() {
    var template = Handlebars.compile($('#filter-template').text());
    return template(this);
  };

  PortfolioItem.loadAll = function(data){
    PortfolioItem.all = data.map(function(ele){
      return new PortfolioItem(ele);
    });
  };

  PortfolioItem.getAll = function(callBack){
    $.getJSON('data/portfolioData.json', function(data){
      PortfolioItem.loadAll(data);
      localStorage.portfolioData = JSON.stringify(data);
      //callBack();
    });
  };

  PortfolioItem.fetchAll = function (callBack){
    if (localStorage.portfolioData) {
      $.ajax( {
        type: 'HEAD',
        url: 'data/portfolioData.json',
        success: function(data, message, xhr) {
          var eTag = xhr.getResponseHeader('eTag');
          if (!localStorage.eTag || eTag !== localStorage.eTag) {
            PortfolioItem.getAll(JSON.parse(localStorage.portfolioData));
            callBack();
          } else {
            localStorage.eTag = eTag;
            PortfolioItem.getAll(callBack);
          }
        }
      });
    } else {
      PortfolioItem.getAll(callBack);
    }
  };

  module.PortfolioItem = PortfolioItem;
}(window));
