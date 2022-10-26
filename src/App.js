import "assets/scss/style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
