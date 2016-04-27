
(function (module) {
  var projectController = {};

  projectController.index = function() {
    PortfolioItem.fetchAll(portfolioView.initializeIndex);
    $('#home').hide();
    $('#about').hide();
    $('#projects').show();
  };
  module.projectController = projectController;
})(window);
