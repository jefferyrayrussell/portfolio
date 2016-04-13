var portfolioItems = [];

function PortfolioItem (opts) {
  this.title = opts.title;
  this.category = opts.category;
  this.repositoryUrl = opts.repositoryUrl;
  this.date = opts.date;
  this.readMe = opts.readMe;
}

Portfolio.prototype.toHtml = function() {
  var $newPortfolioItem = $('portfolioItem.template').clone();

//Code Below Needs Reworking
  $newPortfolioItem.find('h1').html(this.title);
  $newPortfolioItem.attr('category', this.category);
  $newPortfolioItem.find('a').attr('href', this.repositoryUrl);
  $newPortfolioItem.find('.readme').html(this.body);

  $newPortfolioItem.find('time[pubdate]');

  $newPortfolioItem.append('<hr>');

  //This cloned article is no longer a template, so we should remove that class...
  $newPortfolioItem.removeClass('template');
  return $newPortfolioItem;
};


rawData.forEach(function(ele) {
  portfolioItems.push(new Portfolio(ele));
});

portfolioItems.forEach(function(a){
  $('#articles').append(a.toHtml());
});
