//enter your name in line 206 and 184 for proper key-sync
//replace my name from line 206 and 184 with yours

(function() {
    
    'use strict';
// console.log('Cheat-it the cheat engine is running, we\'ve got you covered!');
    var css = document.createElement('style');
    var head = document.head;

    css.type = 'text/css';

    css.innerText = `* {
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
         user-select: text !important;
    }`;

    function main() {

        var doc = document;
        var body = document.body;

        var docEvents = [
            doc.oncontextmenu = null,
            doc.onselectstart = null,
            doc.ondragstart = null,
            doc.onmousedown = null
        ];

        var bodyEvents = [
            body.oncontextmenu = null,
            body.onselectstart = null,
            body.ondragstart = null,
            body.onmousedown = null,
            body.oncut = null,
            body.oncopy = null,
            body.onpaste = null
        ];

        [].forEach.call(
            ['copy', 'cut', 'paste', 'select', 'selectstart'],
            function(event) {
                document.addEventListener(event, function(e) { e.stopPropagation(); }, true);
            }
        );

        alwaysAbsoluteMode();
        enableCommandMenu();
        head.appendChild(css);
        document.addEventListener('keydown', keyPress);
    }

    function keyPress(event) {
       
        if (event.ctrlKey && event.keyCode == 192) {
            return confirm('Activate Absolute Right Click Mode!') == true ? absoluteMode() : null;
        }
        
    }

    function absoluteMode() {
        [].forEach.call(
            ['contextmenu', 'copy', 'cut', 'paste', 'mouseup', 'mousedown', 'keyup', 'keydown', 'drag', 'dragstart', 'select', 'selectstart'],
            function(event) {
                document.addEventListener(event, function(e) { e.stopPropagation();
                    }, true);
            }
        );
    }

    function alwaysAbsoluteMode() {
        let sites = ['example.com','www.example.com'];
        const list = RegExp(sites.join('|')).exec(location.hostname);
        return list ? absoluteMode() : null;
    }

    function enableCommandMenu() {
        var commandMenu = true;
        try {
            if (typeof(GM_registerMenuCommand) == undefined) {
                return;
            } else {
                if (commandMenu == true ) {
                    GM_registerMenuCommand('Enable Absolute Right Click Mode', function() {
                        return confirm('Activate Absolute Right Click Mode!') == true ? absoluteMode() : null;
                    });
                }
            }
        }
        catch(err) {
            // console.log(err);
        }
    }

    var blackList = [
        'youtube.com','.google.','.google.com','greasyfork.org','twitter.com','instagram.com','facebook.com','translate.google.com','.amazon.','.ebay.','github.','stackoverflow.com',
        'bing.com','live.com','.microsoft.com','dropbox.com','pcloud.com','box.com','sync.com','onedrive.com','mail.ru','deviantart.com','pastebin.com',
        'dailymotion.com','twitch.tv','spotify.com','steam.com','steampowered.com','gitlab.com','.reddit.com'
    ]

    var enabled = false;
    var url = window.location.hostname;
    var match = RegExp(blackList.join('|')).exec(url);

    if (window && typeof window != undefined && head != undefined) {

        if (!match && enabled != true) {

            main();
            enabled = true

            //console.log(location.hostname);

            window.addEventListener('contextmenu', function contextmenu(event) {
                event.stopPropagation();
                event.stopImmediatePropagation();
                var handler = new eventHandler(event);
                window.removeEventListener(event.type, contextmenu, true);
                var eventsCallBack = new eventsCall(function() {});
                handler.fire();
                window.addEventListener(event.type, contextmenu, true);
                if (handler.isCanceled && (eventsCallBack.isCalled)) {
                    event.preventDefault();
                }
            }, true);
        }

        function eventsCall() {
            this.events = ['DOMAttrModified', 'DOMNodeInserted', 'DOMNodeRemoved', 'DOMCharacterDataModified', 'DOMSubtreeModified'];
            this.bind();
        }

        eventsCall.prototype.bind = function() {
            this.events.forEach(function (event) {
                document.addEventListener(event, this, true);
            }.bind(this));
        };

        eventsCall.prototype.handleEvent = function() {
            this.isCalled = true;
        };

        eventsCall.prototype.unbind = function() {
            this.events.forEach(function (event) {}.bind(this));
        };

        function eventHandler(event) {
            this.event = event;
            this.contextmenuEvent = this.createEvent(this.event.type);
        }

        eventHandler.prototype.createEvent = function(type) {
            var target = this.event.target;
            var event = target.ownerDocument.createEvent('MouseEvents');
            event.initMouseEvent(
                type, this.event.bubbles, this.event.cancelable,
                target.ownerDocument.defaultView, this.event.detail,
                this.event.screenX, this.event.screenY, this.event.clientX, this.event.clientY,
                this.event.ctrlKey, this.event.altKey, this.event.shiftKey, this.event.metaKey,
                this.event.button, this.event.relatedTarget
            );
            return event;
        };

        
let i=Math.floor(Math.random()*1000+Math.random()*100);
        eventHandler.prototype.fire = async function() {
            var target = this.event.target;
            var contextmenuHandler = async function(event) {
                event.preventDefault();
            }.bind(this);
            target.dispatchEvent(this.contextmenuEvent);
            let question
            let answer
            let oak={
                id:null,
                answer:null
            }
           
           let oqk={
               id:null,
               question:null
           }
        if(this.event.ctrlKey){
        //question=this.event.srcElement.textContent;
        question=this.event.srcElement.textContent;
        //   oqk[`${i}_fuckeer`]=question //enter yourname here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        let k={...oqk,
            id:`${i}_fuckeer`,
question:question
        }
        //    console.log(k);
            i++
            // axios.post('https://covid19summary-e9297.firebaseio.com/question.json',oqk)
            // .then(res=>console.log(res.data()))
            // .catch(err=>console.log('err:::',err))
           fetch('https://cheat-it.firebaseio.com/question.json', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(k),
          })
          .then(response => response.json())
          .then(data => {
            // console.log('Success:', data);
          })
          .catch((error) => {
            // console.error('Error:', error);
          });
        
       
        }    
        else if(this.event.altKey){
           answer=this.event.srcElement.textContent;
        // oak[`${i-1}_fuckeer`]=answer //enter yourname here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      
        let l={...oak,
            id:`${i-1}_fuckeer`,
answer:answer
        }
        // console.log(l);
        fetch('https://cheat-it.firebaseio.com/answers.json', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(l),
          })
          .then(response => response.json())
          .then(data => {
            // console.log('Success:', data);
          })
          .catch((error) => {
            // console.error('Error:', error);
          });

        }
    

    
        // console.log('question:::',question);
        // console.log('answer:::',answer);
    




            
            this.isCanceled = this.contextmenuEvent.defaultPrevented;
        };

    }

    

})();
