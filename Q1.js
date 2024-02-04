document                                                                          window
It represents any HTML document or                                       It represents a browser window or 
web page that is loaded in the browser.                                  frame that displays the contents of the webpage.   
                              

It is loaded inside the window.                                          It is the very first object that is loaded in the browser.


                                                                        
It is the object of window property.                                     It is the object of the browser.


                                                                        
All the tags, elements with attributes                                   Global objects, functions, and variables of JavaScript 
 in HTML are part of the document.                                       are members of the window object


                                                                        

We can access the document from a                                        We can access the window from the window only. i.e. window.window
window using the window. document



The document is part of BOM (browser object model)                       The window is part of BOM, not DOM.
and dom (Document object model)



Properties of document objects such as title,                           Properties of the window object cannot be accessed by the document object.
body, cookies, etc can also be accessed by a window 
like this window. document.title



syntax:                                                                syntax:

       window.propertyname;                                                    document.propertyname;


      


example:                                                                example:
                                                                               

     document.title :  will return the title of the document                   window.innerHeight : will return the height of the content area of the browser                 

DOCUMENT.OBJECT 

<!DOCTYPE html>
<html>

<head>
	<title>document's Properties</title>
	<style>
		h1 {
			color: BLUE;
		}
	</style>
</head>

<body>
	<h1> HAI HELLO </h1>
	<button onclick="myFunction()">CLICK ME</button>
	<p id="demo"></p>


	<script>
		function myFunction() {
			let title = document.title;
			let domain = document.domain;
			let body = document.body;
			document.getElementById("demo").innerHTML =
				"the title of the document is : "
				+ title
				+ "<br>"
				+ "domain : "
				+ domain
				+ "<br>"
				+ "body : "
				+ body;
		}
	</script>
</body>

</html>

WINDOW.OBJECT

<!DOCTYPE html>
<html>
 
<head>
    <title> Window's Properties</title>
    <style>
        h1 {
            color: green;
        }
    </style>
</head>
 
<body>
    <h1>HAI HELLO</h1>
    <button onclick="show()">Check</button>
    <p id="prop"></p>
 
 
    <script>
        function show() {
            let h = window.innerHeight;
            let w = window.innerWidth;
            let l = window.location;
            let c = window.closed;
            document.getElementById("prop").innerHTML =
                "Frame's Height: "
                + h + "<br>"
                + "Frame's Width: "
                + w + "<br>"
                + "Window location:"
                + l
                + "<br>"
                + "Window Closed: "
                + c;
        }
    </script>
</body>
 
</html>








