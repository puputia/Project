<!-- HTML -->
<!-- <!DOCTYPE html>
<html lang="en">
 
  <body>
    <h1>Hello HTML!</h1>
  </body>
</html> -->

<!-- Javascript -->
<!-- <!DOCTYPE html>
<html lang="en">
 
  <body>
    <div id="root"></div>
    <script>
      const rootElement = document.getElementById("root");
      const element = document.createElement("h1");
      element.textContent = "Hello Javascript!";

      rootElement.appendChild(element);
    </script>
  </body>
</html> -->

<!-- React -->
<!DOCTYPE html>
<html lang="en">
 
  <body>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    
    <div id="root"></div>
    <script>
      const rootElement = document.getElementById("root");
      const element = React.createElement("h1", {
        children: "hello React!"
      });

      ReactDom.render(element, rootElement);
    </script>
  </body>
</html>