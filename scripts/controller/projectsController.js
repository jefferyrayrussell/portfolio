
(function (module) {
  var projectsController = {};

  projectsController.index = function() {
    $('#projects').empty();
    $('#welcome').hide();
    $('#resume').hide();
    $('#repos').hide();
    $('#projects').show();
    $('.style-filters'.show);
    PortfolioItem.fetchAll(portfolioView.initializeIndex);
  };
  module.projectsController = projectsController;
})(window);
