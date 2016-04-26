
(function (module) {
  var projectController = {};

  projectController.index = function() {
    PortfolioItem.fetchAll(portfolioView.initializeIndex);
    $('#portfolio-welcome').hide();
    $('#portfolio-resume').hide();
    $('#portfolio-container').show();
  };
  module.projectController = projectController;
})(window);
