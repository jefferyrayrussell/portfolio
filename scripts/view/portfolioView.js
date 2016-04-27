
(function(module){
  var portfolioView = {};

  /* This code provides functionality to the navigation bar tabs so that
  when one tab is clicked the content associated with the other tabs disappears. */

  // portfolioView.handleNavigationBar = function(){
  //   $('.navigation-bar').on('click', '.page-tab', function(){
  //     $('.page-content').hide();
  //     $('#' + $(this).data('content')).show();
  //   });
  //   $('.navigation-bar .page:first').click();
  // };

  /* This code provides functionality to the filter bar that allows you to select
  one of the displayed portfolio projects and the other projects disappear. */

  portfolioView.populateTitleFilter = function() {
    $('article').each(function() {
      if (!$(this).hasClass('portfolio-template')) {
        var val = $(this).attr('data-title');
        var optionTag = '<option value="' + val + '">' + val + '</option>';
        if ($('#title-filter option[value="' + val + '"]').length === 0) {
          $('#title-filter').append(optionTag);
        }
      }
    });
  };

  portfolioView.handleTitleFilter = function() {
    $('#title-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-title="' + $(this).val() + '"]').fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
    });
  };

/* This code appends the navigation bar and portfolio projects on the page. */

  portfolioView.initializeIndex = function() {
    PortfolioItem.all.forEach(function(a){
      $('#projects').append(a.toHtml());
      portfolioView.populateTitleFilter();
      portfolioView.handleTitleFilter();
      // portfolioView.handleNavigationBar();
    });
  };

  module.portfolioView = portfolioView;
})(window);
