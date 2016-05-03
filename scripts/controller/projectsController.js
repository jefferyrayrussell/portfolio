
(function(module) {
  var projectsController = {};

  projectsController.index = function() {
    PortfolioItem.fetchAll(portfolioView.initializeIndex);
    $('#welcome').hide();
    $('#resume').hide();
    $('#repos').hide();
    $('#projects').show();
  };

  projectsController.displayByCategory = function(ctx,next) {
    $('#title-filter').on('change', function() {
      if ($(this).val()) {

        $('#projects article').hide();
        $('article[data-title="' + $(this).val() + '"]').fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
    });
    next();
  };
  module.projectsController = projectsController;
})(window);
