/**@name VideoPIPToggle*/

const enabledIcon =
  '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" width="20" height="20" xml:space="preserve"><style type="text/css">.st0{fill:#B9BBBE;}</style><g><path class="st0" d="M21.526 8.149C21.231 7.966 20.862 7.951 20.553 8.105L18 9.382V7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.104 2.897 19 4 19H16C17.103 19 18 18.104 18 17V14.618L20.553 15.894C20.694 15.965 20.847 16 21 16C21.183 16 21.365 15.949 21.526 15.851C21.82 15.668 22 15.347 22 15V9C22 8.653 21.82 8.332 21.526 8.149Z"/><polygon points="19.3,11.2 19.3,11.2 19.3,11.2 "/><polygon points="19.3,11.2 19.3,11.2 19.3,11.2 "/></g></svg>';
const enabledIconHover =
  '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" width="20" height="20" xml:space="preserve"><style type="text/css">.st0{fill:#dcddde;}</style><g><path class="st0" d="M21.526 8.149C21.231 7.966 20.862 7.951 20.553 8.105L18 9.382V7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.104 2.897 19 4 19H16C17.103 19 18 18.104 18 17V14.618L20.553 15.894C20.694 15.965 20.847 16 21 16C21.183 16 21.365 15.949 21.526 15.851C21.82 15.668 22 15.347 22 15V9C22 8.653 21.82 8.332 21.526 8.149Z"/><polygon points="19.3,11.2 19.3,11.2 19.3,11.2 "/><polygon points="19.3,11.2 19.3,11.2 19.3,11.2 "/></g></svg>';
const disabledIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" width="20" height="20" xml:space="preserve"><style type="text/css">.st0{fill:#B9BBBE;}.st1{fill:#F04747;}</style><g><path class="st0" d="M21.526 8.149C21.231 7.966 20.862 7.951 20.553 8.105L18 9.382V7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.104 2.897 19 4 19H16C17.103 19 18 18.104 18 17V14.618L20.553 15.894C20.694 15.965 20.847 16 21 16C21.183 16 21.365 15.949 21.526 15.851C21.82 15.668 22 15.347 22 15V9C22 8.653 21.82 8.332 21.526 8.149Z"/><polygon points="19.3,11.2 19.3,11.1 19.3,11.1 "/></g><polygon class="st1" points="22.6,2.7 22.6,2.8 19.3,6.1 16,9.3 16,9.4 15,10.4 15,10.4 10.3,15 2.8,22.5 1.4,21.1 21.2,1.3 "/></svg>';
const disabledIconHover =
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" width="20" height="20" xml:space="preserve"><style type="text/css">.st0{fill:#dcddde;}.st1{fill:#F04747;}</style><g><path class="st0" d="M21.526 8.149C21.231 7.966 20.862 7.951 20.553 8.105L18 9.382V7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.104 2.897 19 4 19H16C17.103 19 18 18.104 18 17V14.618L20.553 15.894C20.694 15.965 20.847 16 21 16C21.183 16 21.365 15.949 21.526 15.851C21.82 15.668 22 15.347 22 15V9C22 8.653 21.82 8.332 21.526 8.149Z"/><polygon points="19.3,11.1 19.3,11.1 19.3,11.1 "/><polygon points="19.3,11.2 19.3,11.1 19.3,11.1 "/></g><polygon class="st1" points="22.6,2.7 22.6,2.8 19.3,6.1 16,9.3 16,9.4 15,10.4 15,10.4 10.3,15 2.8,22.5 1.4,21.1 21.2,1.3 "/></svg>';

class VideoPIPToggle {

  btnReference = null;
  tooltipReference = null;
  observer = null;
  PIPActivity = true;

  constructor() {
    this.onToggle = this.onToggle.bind(this);
    this.onButtonMouseOut = this.onButtonMouseOut.bind(this);
    this.onButtonMouseOver = this.onButtonMouseOver.bind(this);
  }

  getName() { return 'Toggle Video PIP'; }
  getDescription() { return 'Get rid of the Guild Video chat PIP window when leaving the video chat.'; }
  getVersion() { return '2.0.0'; }
  getAuthor() { return 'TXJ'; }

  start() {
    // On start check what PIP window is currently set to.
	var PIPStatus = null;
	
	if(document.querySelectorAll('.pictureInPicture-3VocJq')[0].style.display == ""){
		PIPStatus = true;
	}else if(document.querySelectorAll('.pictureInPicture-3VocJq')[0].style.display == "none"){
		PIPStatus = false;
	}else if(document.querySelectorAll('.pictureInPicture-3VocJq')[0].style.display == "inherit"){
		PIPStatus = true;
	}
	
    this.PIPActivity = PIPStatus;

    // Create our DOM elements
    this.createButton();
    this.createTooltip();
  }

  createButton() {
    const selector = (BdApi.findModuleByProps('flexMarginReset', 'flex').flex || '').split(' ')[0];
    if (!selector) {
      console.error('PIPVideoToggle failed to start up: Selector not found?');
      return;
    }

    // If there are multiple elements found with this selector then the user is most likely in a call. Use the appropriate one
    const rows = document.querySelectorAll(`.${selector}`);
    let row;
    console.log(rows);
    if (rows.length) {
      // Find the correct row
      for (let i = 0; i < rows.length; ++i) {
        if (rows[i].firstElementChild && rows[i].firstElementChild.getAttribute('aria-label') === 'Mute') {
          row = rows[i];
          break;
        }
      }
    } else {
      row = rows[0];
    }

    this.btnReference = row.firstElementChild.cloneNode(true);
	
	
    this.btnReference.firstElementChild.innerHTML = this.PIPActivity ? enabledIcon : disabledIcon;
    this.btnReference.firstElementChild.style.pointerEvents = 'none';
    this.btnReference.id = 'PIPVideoToggleBtn';
    this.btnReference.setAttribute('aria-label', 'Toggle PIP Video');
    this.btnReference.setAttribute('aria-checked', `${this.PIPActivity ? 'true' : 'false'}`);

    this.btnReference.addEventListener('click', this.onToggle);
    this.btnReference.addEventListener('mouseenter', this.onButtonMouseOver);
    this.btnReference.addEventListener('mouseleave', this.onButtonMouseOut);
    row.prepend(this.btnReference);

    // Observe changes on the row to watch for our element being overwritten.
    if (!this.observer) {
      this.observer = new MutationObserver(this.checkForRemoval);
      this.observer.observe(row, { attributes: false, childList: true, subtree: false });
    }
  }

  createTooltip() {
    // Also setup my recreated tooltip that uses Discord's classes.
    const tooltipClasses = BdApi.findModuleByProps('tooltipBottom');

    const wrapperDiv = document.createElement('div');
    wrapperDiv.style.visibility = 'hidden';
    wrapperDiv.style.position = 'absolute';
    wrapperDiv.style.zIndex = '10000';
    wrapperDiv.style.pointerEvents = 'none';
    this.tooltipReference = wrapperDiv;

    const textWrapper = document.createElement('div');
    textWrapper.className = [tooltipClasses.tooltip, tooltipClasses.tooltipTop, tooltipClasses.tooltipBlack].join(' ');
    textWrapper.innerText = `Turn ${this.PIPActivity ? 'off' : 'on'} PIP window.`;

    const bottomArrow = document.createElement('div');
    bottomArrow.className = tooltipClasses.tooltipPointer;

    textWrapper.prepend(bottomArrow);
    wrapperDiv.appendChild(textWrapper);
    document.body.appendChild(wrapperDiv);
  }

  onToggle() {

	var PIPElement = document.querySelectorAll('.pictureInPicture-3VocJq');
	
    this.PIPActivity = !this.PIPActivity;
	this.PIPActivity ? PIPElement.forEach(e => e.style.display = 'inherit') : PIPElement.forEach(e => e.style.display = 'none');

    this.btnReference.firstElementChild.innerHTML = this.PIPActivity ? enabledIcon : disabledIcon;

    // In order to preserve the tooltipPointer but also change the message we have to do this
    const innerTooltipHTML = this.tooltipReference.firstElementChild.innerHTML.split('Turn');
    this.tooltipReference.firstElementChild.innerHTML = `${innerTooltipHTML[0]} Turn ${
      this.PIPActivity ? 'off' : 'on'
    } PIP window.`;

    this.btnReference.setAttribute('aria-checked', `${this.PIPActivity ? 'true' : 'false'}`);

  }

  // On mouse over swap icons to highlight and display tooltip in correct position.
  onButtonMouseOver({ target }) {
    this.btnReference.firstElementChild.innerHTML = this.PIPActivity ? enabledIconHover : disabledIconHover;

    const { x, y } = target.getBoundingClientRect();
    const tooltipXPos = x + target.clientWidth / 2 - this.tooltipReference.offsetWidth / 2;
    const tooltipYPos = y - target.clientHeight - 8; // 8 being a constant amount of space to hover above the btn.
	
    this.tooltipReference.style.left = `${tooltipXPos}px`;
    this.tooltipReference.style.visibility = 'visible';
    this.tooltipReference.style.top = `${tooltipYPos}px`;

    this.tooltipReference.visibility = 'visible';
  }

  onButtonMouseOut() {
    this.btnReference.firstElementChild.innerHTML = this.PIPActivity ? enabledIcon : disabledIcon;
    this.tooltipReference.style.visibility = 'hidden';
  }

  checkForRemoval() {
    if (!document.getElementById('PIPVideoToggleBtn')) {
      this.createButton();
    }
  }

  stop() {
    this.observer.disconnect();
    this.btnReference.removeEventListener('mouseenter', this.onButtonMouseOver);
    this.btnReference.removeEventListener('mouseleave', this.onButtonMouseOut);
    this.btnReference.parentNode.removeChild(this.btnReference);
    this.tooltipReference.parentNode.removeChild(this.tooltipReference);
  }
}
