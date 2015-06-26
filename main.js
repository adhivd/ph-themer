
var themes = {
	"Crazy": "themes/crazy.css",
	"Dark": "themes/dark.css"
};

var select;

function addThemeChooser() {

	select = document.createElement('select');
	for(var key in themes)
	{
		var option = document.createElement('option');
		option.value = key;
		option.appendChild(document.createTextNode(key + ' Theme'));
		select.appendChild(option);
	}

	var selectorLocation = document.querySelector(".header--search");

	selectorLocation.appendChild(select);
}

function removeCSSFiles() {

	var headList = document.querySelectorAll("[data-phtheme]");

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
	linkEl.dataset.phtheme = "true";

	document.getElementsByTagName("head")[0].appendChild(linkEl);
}

function setTheme() {
	select.addEventListener("change", ughFunction);
	
	function ughFunction() {
		var filePath;
		var path = themes[select.value];
		
		filePath = chrome.extension.getURL(path);
		removeCSSFiles();
		addCSSFile(filePath);
	}
}

addThemeChooser();

setTheme();

//removeCSSFile(filePath);
// done on purpose to keep color change in effect!