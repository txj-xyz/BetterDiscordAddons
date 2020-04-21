//META{"name":"RemovePIPVideo"}*//
class RemovePIPVideo {
	
	// Meta Get Name and Information for Plugin.
	getName() { return "Remove Video PIP"; }
	getShortName() { return "RemovePIPVideo"; }
	getDescription() { return "Get rid of the Guild Video chat PIP window when leaving the video chat."; }
	getVersion() { return "1.0.2"; }
	getAuthor() { return "TXJ"; }

	
	// Load/Unload
	load() { }
	
	// Start/Stop
	start () {
		document.querySelectorAll('.pictureInPicture-3VocJq').forEach(e => e.style.display = 'none');
	}

	stop () {
		document.querySelectorAll('.pictureInPicture-3VocJq').forEach(e => e.style.display = 'inherit');
	}
}
