import React from "react";
import Nav_bar from "./nav_bar.jsx";
import Footer from "./footer.jsx";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";


//create your first component
const Home = () => {
	return (
	<div style={{minWidth:"550px"}}>
	<Nav_bar />
	<main className="container">
		<Jumbotron />
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
				<Card />
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
				<Card />
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
				<Card />
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
				<Card />
			</div>
		</div>
	</main>
	<Footer />
	</div>
	)
};

export default Home;
