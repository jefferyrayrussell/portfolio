
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
    $('#name-filter').on('change', function(e) {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-name="' + $(this).val() + '"]').show();
      } else {
        $('article').show();
      }
    });
  };

  portfolioView.initIndexPage = function () {
    ProjectItem.all.forEach(function(a){
      $('#portfolio-projects').append(a.toHtml());
    });
  };

  $(document).ready(function(){
    portfolioView.handleNavigationBar();
    portfolioView.handleNameFilter();
  });

  module.portfolioView = portfolioView;
})(window);
