$(function() {
	// 加载留言
	function loadMessages() {
	  // ajax
	  $.get('/loadMessages', function(resText, statusText, xhr) {
	    if (statusText == 'success') {
	      var messagesObj = JSON.parse('[' + resText + ']');
	      console.log(messagesObj);
	      // 对信息处理
	    }
	  });
	}
	loadMessages();

	// 增加留言
	$(".submit-btn").click(function() {
		console.log(111)
		// 标题值
		var title = $('input[name="title"]').val();
		// 留言内容
		var content = $('textarea').val();
		// 如果对象属性名等于属性值变量的名字可以省略 值
	  $.post('/addMessage', {title,content}, function(resText, statusText, xhr) {

	  });
	});
});

