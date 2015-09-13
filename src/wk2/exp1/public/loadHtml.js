var request; // JavaScript HTTP request object
var contentsTargetID; // ID of HTML element to hold the received contents

function loadHtml(targetUrl, targetID) {
  // Save ID of contents destination element (span/div/td)
  contentsTargetID = targetID;
  // Set request object based on browser type
  if (window.XMLHttpRequest)
    request = new XMLHttpRequest();
  else if (window.ActiveXObject) 
    request = new ActiveXObject("Microsoft.XMLHTTP");
    
  if (request) {
    // Send an HTTP POST request to targetUrl in asychronous mode
    request.open("GET", targetUrl, true); // true: asynchronous invocation
    // Register function readyStateProcessing() as event listener   
    request.onreadystatechange = readyStateProcessing;
    // Send the HTTP request without auguments; arguments could be like "a=1&b=2"
    request.send("");
  }
}

function readyStateProcessing() { 
  //request states: 2: no response yet; 3: partial response received; 
  // 4: all response data received
  // If all response data have arrived and request status is OK
  if ((request.readyState == 4) && (request.status == 200)) {
    var contentsElement = document.getElementById(contentsTargetID);
    contentsElement.innerHTML = request.responseText;                
  }
}    