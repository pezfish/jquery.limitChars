# jQuery Limit Characters
Limit number of characters in `textarea` or `input` field, regardless of the browser being used. Compatible with IE6+, Firefox, Safari and Chrome.

**Example Usage:**

Setup is as easy as:

	$("#field").limitChars();


The default character limit is **150**, however you can change this via the `maxChars` option:

	$("#field").limitChars({
		maxChars: 250
	});

**Example using all options:**


	$("#field").limitChars({
		// Amount of characters to limit this field to.
		maxChars: 250,
	
		// Show remaining character status or only limit characters?
		showRemaining: true,
		
		// Selector for span/div which will contain the status for your characters remaining.
		// Default: None. Status will be automatically displayed below the field unless a selector for this is specified.
		charDisplay: ".mySelector",
		
		// Allows you to specify a custom status format. Allows HTML.
		// Default: "Characters Remaining: {REMAINING}/{MAX}"
		remainingFormat: "You have <strong>{REMAINING}</strong> characters remaining (out of {MAX})."
	});

See the included `demo.html` file for these examples in action.
