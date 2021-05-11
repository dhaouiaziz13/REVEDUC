import Home from "./components/home";
import Join from "./components/joinus"
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/join" exact component={Join} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
