function addThemeChooser() {

}

function removeCSSFile(src) {

	var headList = document.querySelectorAll('link')

	for(var i = 0; i < headList.length; i++)
	{
		if (headList[i].href == src)
		{
			var removeEl = headList[i];
			var parentEl = removeEl.parentNode;

			parentEl.removeChild(removeEl);



		}
	}


}

function addCSSFile(src) {
	alert('Beginning Alert');
	var linkEl = document.createElement("link");
	linkEl.rel = "stylesheet";
	linkEl.href = src;

	document.getElementsByTagName("head")[0].appendChild(linkEl);
	alert('Ending Alert');


}

function setTheme() {

}

var path = 'themes/dark.css';

var filePath = chrome.extension.getURL(path);

addCSSFile(filePath);

addThemeChooser();

alert('Removing CSS')

//removeCSSFile(filePath);

