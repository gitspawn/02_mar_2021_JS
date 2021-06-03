http://
htts://

ws://
wss://


// Open socket
let wsUrl = 'wss://site.com'
let socket = new WebSocket(wsUrl)

// open
// message
// error
// close

socket.onopen();
socket.send(data)
socket.onmessage()
socket.close([code], [reason]);
socket.onerror()


