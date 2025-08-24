import React from "react";
import { ThemeProvider } from "styled-components";
import colors from "./styles/colors";
import Routes from "./pages/Routes";
import DataProvider from "../src/contexts/Data/DataProvider";
import ImagePreloader from "./utils/ImagePreloader";

const App = () => {
	return (
		<ThemeProvider theme={colors}>
			<DataProvider>
				<ImagePreloader />
				<Routes />
			</DataProvider>
		</ThemeProvider>
	);
};

export default App;
