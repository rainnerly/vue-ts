require(['jquery', 'message', 'all'],function($, message, all){
  $('#app').html(message + ',' + all)
})