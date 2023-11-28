import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

// the code below is what links the App component above to the root div in index.html

// we grab the div with the ID of 'root' and assign to a variable 'container'
const container = document.getElementById("root");

// use the 'createRoot' built in function (which we imported at the top of the file from the library) - this takes a parameter which is the container variable we just created - this creates a React 'anchor point', assign to a variable called 'root'
const root = createRoot(container);

// finally, we use the .render() function to render the App component on the index.html page, replacing the root div in the html
root.render(<App />);
