window.jQuery = window.$ = require('jquery')
require('bootstrap')

$('a[href="#"]').click(function (e) {
  e.preventDefault()
})
