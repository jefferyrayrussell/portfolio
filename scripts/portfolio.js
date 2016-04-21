
(function (module) {

  function ProjectItem (object){
    this.name = object.name;
    this.id = object.id;
    this.class = object.class;
    this.developers = object.developers;
    this.date = object.date;
    this.occasion = object.occasion;
    this.link = object.link;
    this.image = object.image;
    this.summary = object.summary;
  }

  ProjectItem.all = [];

  ProjectItem.prototype.toHtml = function() {
    var $source = $('#project-template').html();
    var template = Handlebars.compile($source);
    return template(this);
  };

  ProjectItem.prototype.filterNameToHtml = function() {
    var template = Handlebars.compile($('#name-filter-template').html());
    return template(this);
  };

  ProjectItem.loadAll = function(data) {
    data.forEach(function(ele) {
      ProjectItem.all.push(new ProjectItem(ele));
    });
  };

  ProjectItem.fetchAll = function (){
    localStorage.eTag = JSON.stringify(0);
    if (localStorage.projectsData) {
  $.ajax( {
    type: 'HEAD',
    url: 'data/projectsData.json',
    success: function(data, message, xhr) {
      var eTag = xhr.getResponseHeader('eTag');
      if (eTag !== localStorage.eTag) {
        $.getJSON('data/projectsData.json', function(data) {
          ProjectItem.loadAll(data);
          localStorage.projectsData = JSON.stringify(ProjectItem.all);
          localStorage.eTag = JSON.stringify(eTag);
          portfolioView.initIndexPage();
        });
      } else {
        ProjectItem.loadAll(JSON.parse(localStorage.projectsData));
        portfolioView.initIndexPage();
      }
    }
  });
} else {
  $.ajax( {
    type: 'HEAD',
    url: 'data/projectsData.json',
    success: function(data, message, xhr) {
      var eTag = xhr.getResponseHeader('eTag');
      localStorage.eTag = JSON.stringify(eTag);
    }
  });

  module.ProjectItem = ProjectItem;

})(window);
