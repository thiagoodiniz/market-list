import React, { useState, useEffect } from "react";
import './MarketList.scss';
import { Card, Button } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import MarketListItem from "./market-list-item/MarketListItem";
import { useDispatch } from "react-redux";
import { Creators as MarketListActions } from '../../store/actions/market-list';

const MarketList = ( props ) => {
	
	const [ marketLists, updateList] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch( MarketListActions.loadMarketLists() );
    }, [dispatch]);

	const handleNewList = () => {
		updateList([...marketLists, {
			name: '',
			description: '',
			market: '',
			isEditing: true,
		}]);
	}

	const handleRemoveList = (idx) => {
		console.log(`removing ${idx}`)
		updateList( marketLists.filter((list, index) => index !== idx));
	}

	return (
		<section className="list">

			{ marketLists.map((list, idx) => 
				<MarketListItem key={ idx } onRemove={ () => handleRemoveList(idx) } { ...list }/>	
			) }

			<Card className="list-card add-list">
				<Button onClick={ handleNewList } >
					<FontAwesomeIcon color="#3f53b5" icon={ faPlusCircle } size="lg"/>
				</Button>
			</Card>
		</section>
	);
}

export default MarketList;