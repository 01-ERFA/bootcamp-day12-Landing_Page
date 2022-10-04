import React from "react";
import Nav_bar from "./nav_bar.jsx";
import Footer from "./footer.jsx";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";


//create your first component
const Home = () => {
	return (
	<div>
	<Nav_bar />
	<main className="container">
		<Jumbotron />
		<div class="row">
    		<div class="col">
     			<Card />
   			</div>
    		<div class="col">
      			<Card />
    		</div>
			<div class="col">
				<Card />
			</div>
			<div class="col">
				<Card />
			</div>
  		</div>
	</main>
	<Footer />
	</div>
	)
};

export default Home;
