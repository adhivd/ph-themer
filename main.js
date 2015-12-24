var themes = {
	"Default": null,
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
	var phNavMenu = document.getElementsByClassName('header--nav-items');
	var newSelectorLocation = phNavMenu[phNavMenu.length - 1];
	newSelectorLocation.appendChild(select);

	//var selectorLocation = document.querySelector(".header--search-form");

	//selectorLocation.appendChild(select);
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
		removeCSSFiles();

        var path = select.value;

        localStorage.setItem('name', path);

		if(path == null)
		{
			return;
		}

		addCSSFile(chrome.extension.getURL(themes[path]));
        return;
	}
    
    var stored = localStorage.getItem('name');
    
    select.value = stored;
    
    if(stored == null)
    {
        return;
    }
    
    addCSSFile(chrome.extension.getURL(themes[stored]));     
}

addThemeChooser();

setTheme();

//removeCSSFile(filePath);
// done on purpose to keep color change in effect!