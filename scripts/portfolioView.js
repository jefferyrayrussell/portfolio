
(function(module){

  var portfolioView = {};

  /* This code provides functionality to the navigation bar tabs sot that
  when one tab is clicked the content associated with the other tabs disappears. */

  portfolioView.handleNavigationBar = function(){
    $('.navigation-bar').on('click', '.page-tab', function(){
      //$('.page-content').hide();
      $('#' + $(this).data('content')).show();
    });
    $('.navigation-bar .page:first').click();
  };

  /* This code provides functionality to the filter bar that allows you to select
  one of the displayed portfolio projects and the other projects disappear. */

  portfolioView.handleTitleFilter = function() {
    $('#title-filter').on('change', function(e) {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-title="' + $(this).val() + '"]').show();
      } else {
        $('article').show();
      }
    });
  };

/* This code appends the navigation bar and portfolio projects on the page. */

  portfolioView.initializeIndex = function() {
    PortfolioItem.all.forEach(function(a){
      $('#portfolio-container').append(a.toHtml());
    });
    portfolioView.handleNavigationBar();
  };

  module.portfolioView = portfolioView;
})(window);
