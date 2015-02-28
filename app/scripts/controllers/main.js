'use strict';

angular.module('reactApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


var Hello=React.createClass({
    propTypes:{
        fname: React.PropTypes.string,
        lname: React.PropTypes.string
    },
    
    render: function(){
        return React.DOM.span(null,
                             'Hello ' + this.props.fname + ' ' + this.props.lname
                             );
    }
});

angular.module('reactApp').value('Hello', Hello);

angular.module('reactApp').directive('hello', function(reactDirective){
    return reactDirective(Hello);
})
