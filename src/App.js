import Home from "./components/home";
// import Join from "./components/joinus"
import About from "./components/about"
import Contact from "./components/Conatct"
import Club from "./components/Club"
import Event from "./components/Event"
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" exact component={Home} />
					{/* <Route path="/join" exact component={Join} /> */}
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/club" component={Club} />
					<Route path="/event" component={Event} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
