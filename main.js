function addThemeChooser() {

	alert('Starting');

	var select = document.createElement('select');
	var opt1 = document.createElement('option');
	var opt1Text = document.createTextNode('Dark Theme');
	var opt2 = document.createElement('option');
	var opt2Text = document.createTextNode('Crazy Theme');


	select.appendChild(opt1);
	select.appendChild(opt2);
	opt1.appendChild(opt1Text);
	opt2.appendChild(opt2Text);


	alert('Got past the creating dropdown');

	var selectorLocation = document.querySelectorAll("[class=\"brand\"]");

	alert('Got past the selectorLocation');

	selectorLocation[0].appendChild(select);

	alert('successfully appended');
}

function removeCSSFile(src) {

	var headList = document.querySelectorAll("[href=\"" + src + "\" ]");

	for(var i = 0; i < headList.length; i++)
	{
			var removeEl = headList[i];
			var parentEl = removeEl.parentNode;
			parentEl.removeChild(removeEl);
	}

}

function addCSSFile(src) {
	var linkEl = document.createElement("link");
	linkEl.rel = "stylesheet";
	linkEl.href = src;

	document.getElementsByTagName("head")[0].appendChild(linkEl);
}

function setTheme() {

}

var path = 'themes/dark.css';

var filePath = chrome.extension.getURL(path);

addCSSFile(filePath);

addThemeChooser();

//removeCSSFile(filePath);
// done on purpose to keep color change in effect!