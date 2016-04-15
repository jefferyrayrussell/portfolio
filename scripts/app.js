var projectDataItems = [];

function ProjectItem (object){
  this.name = object.name;
  this.id = object.id;
  this.class = object.class;
  this.creators = object.creators;
  this.date = object.date;
  this.repoUrl = object.repoUrl;
  this.summary = object.summary;
};

ProjectItem.prototype.toHtml = function() {
  var $source = $('#project-template').html();
  var template = Handlebars.compile($source);

/*
ProjectItem.prototype.toHtml = function() {
  var $newProjectItem = $('article.template').clone();
  $newProjectItem.find('.name').html(this.name);
  $newProjectItem.attr('id', this.id);
  $newProjectItem.attr('class', this.class);
  $newProjectItem.find('.creators').html(this.creators);
  $newProjectItem.find('.date').html(this.date);
  $newProjectItem.find('.summary').html(this.summary);
  $newProjectItem.find('a').attr('href', this.repoUrl);
  $newProjectItem.find('.summary').html(this.summary);
  $newProjectItem.append('<a href="' + this.repoUrl + '" class="look-here" target="_blank">Look Here!</a>');

  $newProjectItem.removeClass('template');
  return $newProjectItem;
};
*/
projectData.forEach(function(ele) {
  projectDataItems.push(new ProjectItem(ele));
});

projectDataItems.forEach(function(a){
  $('#projects').append(a.toHtml());
});

var infoRendered = {};

infoRendered.handleNavigationBar = function(){
  console.log('handleNavigationBar1');
  $('.navigation-bar').on('click', '.page-tab', function(){
    console.log('handleNavigationBar2');
    $('.page-content').hide();
    $('#' + $(this).data('content')).show();
    console.log('#' + $(this).data('content'));
  });

  $('.navigation-bar .page:first').click();
};

$(document).ready(function(){
  infoRendered.handleNavigationBar();
});
