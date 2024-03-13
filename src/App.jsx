import LandingPage from "./components/LandingPage";
import ScrollToTop from "./components/ScrollToTop";
import AppThemeProvider from "./components/ThemeProvider";

const App = () => {
	return (
		<AppThemeProvider>
			<LandingPage />
			<ScrollToTop />
		</AppThemeProvider>
	);
};

export default App;
