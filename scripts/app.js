var projectItems = [];

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
  var $newProjectItem = $('article.template').clone();
  $newProjectItem.find('.name').html(this.name);
  $newProjectItem.attr('id', this.id);
  $newProjectItem.attr('class', this.class);
  $newProjectItem.find('.creators').html(this.creators);
  $newProjectItem.find('.date').html(this.date);
  $newProjectItem.find('.summary').html(this.summary);
  $newProjectItem.find('a').attr('href', this.repoUrl);
  $newProjectItem.find('.summary').html(this.summary);
  //$newProjectItem.append('<hr>');
  $newProjectItem.removeClass('template');
  return $newProjectItem;
};

projectData.forEach(function(ele) {
  projectItems.push(new ProjectItem(ele));
});

projectItems.forEach(function(a){
  $('#projectItems').append(a.toHtml());
});
