
(function(module){

  var portfolioView = {};

  portfolioView.handleNavigationBar = function(){
    $('.navigation-bar').on('click', '.page-tab', function(){
      $('.page-content').hide();
      $('#' + $(this).data('content')).show();
    });
    $('.navigation-bar .page:first').click();
  };

  portfolioView.handleNameFilter = function() {
    $('#title-filter').on('change', function(e) {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-title="' + $(this).val() + '"]').show();
      } else {
        $('article').show();
      }
    });
  };

  portfolioView.initializeIndex = function() {
    PortfolioItem.all.forEach(function(a){
      $('#portfolio-container').append(a.toHtml());
    });
    portfolioView.handleNavigationBar();
  };

  module.portfolioView = portfolioView;
})(window);
