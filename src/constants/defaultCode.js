export const defaultCSS = `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;

}

.container{
}
        
.header-text{
    text-align: center;
}

.bold-text{
    text-align: center;
    font-weight: 500;
}

        
.inside-content{
    text-align: center;
    font-weight: 300;
}`;

export const defaultHTML = `
<div class='container'>
        <h1 class='header-text'>Hello, Welcome to Elephant Editor v1.0</h1>
        <p class='inside-content'>This is the Codepen variant!</p>
        <p class='inside-content'>Please use toggle editor style button to view <span class="bold-text">'w3school'</span> style of editor</p>
        <ul class='bold-text'><li>Edit the code, then run!</li></ul>

</div>`;

export const defaultW3HTML = `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
<style>
body {
  background-color: black;
  text-align: center;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

.bold-text{
    text-align: center;
    font-weight: 700;
    color: red;
}
</style>
</head>
<body>

<h1>Hello, Welcome to Elephant Editor v1.0</h1>
<p>This is the w3school variant!</p>
<p>Please use toggle editor style button to view <span class='bold-text'>'codepen'</span> style of editor</p>
<ul class='bold-text'><li>Edit the code, then run!</li></ul>
</body>
</html>

`;
