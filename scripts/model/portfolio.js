(function(module){

  function PortfolioItem (project){
    for (key in project) {
      this[key] = project[key];
    };
  };

  PortfolioItem.all = [];

  PortfolioItem.prototype.toHtml = function() {
    var template = Handlebars.compile($('#portfolio-template').text());
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

  PortfolioItem.getAll = function(callBackFunction){
    $.getJSON('data/portfolioData.json', function(data){
      PortfolioItem.loadAll(data);
      localStorage.portfolioData = JSON.stringify(data);
      callBackFunction();
    });
  };

  PortfolioItem.fetchAll = function (callBackFunction){
    if (localStorage.portfolioData) {
      $.ajax( {
        type: 'HEAD',
        url: 'data/portfolioData.json',
        success: function(data, message, xhr) {
          var eTag = xhr.getResponseHeader('eTag');
          if (!localStorage.eTag || eTag !== localStorage.eTag) {
            PortfolioItem.getAll(JSON.parse(localStorage.portfolioData));
            callBackFunction();
          } else {
            localStorage.eTag = eTag;
            PortfolioItem.getAll(callBackFunction);
          }
        }
      });
    } else {
      PortfolioItem.getAll(callBackFunction);
    }
  };

  module.PortfolioItem = PortfolioItem;
}(window));
