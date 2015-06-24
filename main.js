function addThemeChooser() {

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