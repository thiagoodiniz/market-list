import React, { Component } from "react";
import './MarketList.scss';
import { Card, Button } from "@material-ui/core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import MarketListItem from "./market-list-item/MarketListItem";

class MarketList extends Component  {

	render() {
		return(
			<section className="list">

				<MarketListItem name="Marcado Fevereiro"/>	

				<MarketListItem name="Marcado Março"/>	


				<Card className="list-card add-list">
					<Button>
						<FontAwesomeIcon color="#3f53b5" icon={ faPlusCircle } size="lg" />
					</Button>
				</Card>
			</section>
		);
	}
}

export default MarketList;