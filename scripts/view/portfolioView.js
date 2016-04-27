
(function(module){
  var portfolioView = {};

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

  portfolioView.initializeIndex = function() {
    PortfolioItem.all.forEach(function(a){
      $('#projects').append(a.toHtml());
      portfolioView.populateTitleFilter();
      portfolioView.handleTitleFilter();
    });
  };

  module.portfolioView = portfolioView;
})(window);
