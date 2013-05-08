/**
 * jQuery Textarea Character Limit
 * Copyright (c) 2013 Kevin Doyle and Patrick Nelson
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 **/

(function($) {
	$.fn.limitChars = function(options) {
		var defaults = {
			maxChars: 150,
			showRemaining: true, // If set, it will show remaining character count according to the format below. It will a placeholder to display status if one doesn't already exist or unless a "charDisplay" selector is provided below.
			charDisplay: null, // Selector for existing placeholder to show current status.
			remainingFormat: "Characters Remaining: {REMAINING}/{MAX}"
		};
		options = $.extend(defaults, options);

		return this.each(function() {
			// Keeps track of the selector used to show current status.
			var statusSelector = options.charDisplay;

			var charRemain = function(){
				var obj = $(this),
					data = obj.val(),
					l = data.length,
					numLeft = options.maxChars - l;

				if(numLeft <= 0){
					obj.val(data.substr(0, options.maxChars));
					numLeft = 0;
				}

				if(options.showRemaining){
					// Add status area if one not already specified.
					if (!statusSelector) {
						// Generate a randomized ID and add span.
						var spanId = "limitCharsStatus" + parseInt(Math.random() * 99999);
						$(this).after("<br /><span class='limitCharsStatus' id='" + spanId + "'></span>");
						statusSelector = "#" + spanId;
					}

					// Format output with remaining chars and maximum chars.
					var textOutput = options.remainingFormat;
					textOutput = textOutput.replace("{REMAINING}", numLeft);
					textOutput = textOutput.replace("{MAX}", options.maxChars);
					$(statusSelector).text(textOutput);
				}
			};

			// Initialize.
			charRemain.call(this);

			// Bind on change events.
			$(this).bind("keyup keydown change", charRemain);
		});
	}
})(jQuery);