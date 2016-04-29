
(function (module) {
  var projectsController = {};

  projectsController.index = function() {
    $('#projects').empty();
    $('#welcome').hide();
    $('#resume').hide();
    $('#repos').hide();
    $('#projects').show();
    $('#title-filter'.show);
    PortfolioItem.fetchAll(portfolioView.initializeIndex);
  };
  module.projectsController = projectsController;
})(window);
