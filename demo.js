var isAutoOrienting = require('./')

isAutoOrienting()
  .then(function (result) {
    alert('This browser ' + (result ? 'IS' : 'IS NOT') + ' auto orienting images')
  }, function(error) {
    alert(error)
  })