import React from "react";

import { Navbar } from "./navbar.js";
import { Jumbotrom } from "./jumbotrom.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotrom />
			<Card />
			<Footer />
		</div>
	);
}
