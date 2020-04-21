//META{"name":"RemovePIPVideo"}*//
class RemovePIPVideo {

		// Meta
		getName() { return "Remove Video PIP"; }
		getShortName() { return "RemovePIPVideo"; }
		getDescription() { return "Get rid of the Guild Video chat PIP window when clicking on a text chat."; }
		getVersion() { return "1.0.1"; }
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
