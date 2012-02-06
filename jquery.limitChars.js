(function($) {  
	$.fn.limitChars = function(options) {
		var defaults = {
			maxChars: 150,
			charDisplay: null
		}
		var options = $.extend(defaults, options);
		return this.each(function() {
			$(this).bind("keyup keydown focus", charRemain);
			function charRemain(event){
				var obj = $(event.target),
					data = obj.val(),
					l = data.length,
					n = options.maxChars - l;

				if(n <= 0){
					obj.val(data.substr(0, options.maxChars));	
					n = 0;
				}
				if(options.charDisplay){
					$(options.charDisplay).text(n);	
				}				
			}
		});
	}
})(jQuery);