
(function (module) {
  var resumeController = {};

  resumeController.index = function() {
    $('#welcome').hide();
    $('#projects').hide();
    $('#repos').hide();
    $('#resume').show();
  };
  module.resumeController = resumeController;
})(window);
