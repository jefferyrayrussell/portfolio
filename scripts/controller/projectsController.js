
(function (module) {
  var projectsController = {};

  projectsController.index = function() {
    $('#welcome').hide();
    $('#resume').hide();
    $('#repos').hide();
    $('#projects').show();
    // PortfolioItem.fetchAll(portfolioView.initializeIndex);
  };
  module.projectsController = projectsController;
})(window);
