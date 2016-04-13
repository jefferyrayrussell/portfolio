var portfolioItems = [];

function PortfolioItem (opts) {
  this.projectTitle = opts.projectTitle;
  this.projectCategory = opts.projectCategory;
  this.projectRepositoryUrl = opts.projectRepositoryUrl;
  this.projectCompletedOn = opts.projectCompletedOn;
  this.projectReadMe = opts.projectReadMe;
}

Portfolio.prototype.toHtml = function() {
  var $newPortfolioItem = $('portfolioItem.template').clone();

  $newPortfolioItem.attr('data-category', this.category);
  $newPortfolioItem.find('a').html(this.author);
  $newPortfolioItem.find('a').attr('href', this.authorUrl);
  $newPortfolioItem.find('h1').html(this.title);
  $newPortfolioItem.find('.article-body').html(this.body);
  // Include the publication date as a 'title' attribute to show on hover:
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);

  $newArticle.append('<hr>');

  //This cloned article is no longer a template, so we should remove that class...
  $newArticle.removeClass('template');
  return $newArticle;
};

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(a){
  $('#articles').append(a.toHtml());
});
