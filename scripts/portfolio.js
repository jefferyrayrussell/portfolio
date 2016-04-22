/* The contents of this script file is enclosed in an IIFE, an Immediately
Invoked Function Expression used to place all library code inside of a local scope
inorder to keep code modulized and avoid polluting the global scope which can cause
conflict with other variables.*/

(function(module){

/* The original object constructor has been converted to a more efficient functional
programming style.  All properties of "project" are assigned as properties of the
newly created PortfolioItem object.*/

  function PortfolioItem (project){
    for (key in project) {
      this[key] = project[key];
    };
  };

/* The list of all portfolio projects is directly tracked on the constructor
function. All of the key value pairs that provide content to each portfolio
project are stored in the array PorfolioItem.all */

  PortfolioItem.all = [];

/* The code below creates a method on the object PortfolioItem by means of the
prototype key word.  The method is named toHtml.  What it does for each instance
of PortfolioItem is to use a Handlebars compiled template that uses jQuery .text
to return a string containing all of the matched elements defined in the head of
the index.html file. */

  PortfolioItem.prototype.toHtml = function() {
    var template = Handlebars.compile($('#portfolio-template').text());
    return template(this);
  };

/* Similarly the code below returns a string as defined by the
#title-filter-template for the purpose of gathering the data necessary to
place on a title filter bar.*/

  PortfolioItem.prototype.filterTitleToHtml = function() {
    var template = Handlebars.compile($('#title-filter-template').text());
    return template(this);
  };

/* The code below relates to all of the instances of the PortfolioItem object.
These are often referred to as class level functions.  The loadAll function
attached to the PortfolioItem constructor takes data and uses it to instantiate
all of the portfolio items.  The map method creates a new array with results of
calling a function for every array element. */

  PortfolioItem.loadAll = function(data){
    PortfolioItem.all = data.map(function(ele){
      return new PortfolioItem(ele);
    });
  };

/* The code below retrieves the data from a local or remote source, and then
processes the data, and hands it off to be placed on the window. In this case
the data is found on a json file and preserved in Local Storage.*/

  PortfolioItem.getAll = function(callBackFunction){
    $.getJSON('data/portfolioData.json', function(data){
      PortfolioItem.loadAll(data);
      localStorage.portfolioData = JSON.stringify(data);
      callBackFunction();
    });
  };



  PorfolioItem.fetchAll = function (){
    localStorage.eTag = JSON.stringify(0);
    if (localStorage.portfolioData) {
      $.ajax( {
        type: 'HEAD',
        url: 'data/portfolioData.json',
        success: function(data, message, xhr) {
          var eTag = xhr.getResponseHeader('eTag');
          if (eTag !== localStorage.eTag) {
            $.getJSON('data/portfolioData.json', function(data) {
              PortfolioItem.loadAll(data);
              localStorage.portfolioData = JSON.stringify(PortfolioItem.all);
              localStorage.eTag = JSON.stringify(eTag);
              portfolioView.initializeIndex();
            });
          } else {
            PortfolioItem.loadAll(JSON.parse(localStorage.portfolioData));
            portfolioView.initializeIndex();
          }
        }
      });

    // 
    } else {
      $.ajax( {
        type: 'HEAD',
        url: 'data/portfolioData.json',
        success: function(data, message, xhr) {
          var eTag = xhr.getResponseHeader('eTag');
          localStorage.eTag = JSON.stringify(eTag);
        }
      });
      $.getJSON('data/portfolioData.json', function(data){
        PortfolioItem.loadAll(data);
        localStorage.portfolioData = JSON.stringify(PortfolioItem.all);
        portfolioView.initializeIndex();
      });
    }
  };

  module.PortfolioItem = PortfolioItem;
}(window));
