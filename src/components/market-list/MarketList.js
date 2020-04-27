import React, { useState, useEffect } from "react";
import './MarketList.scss';
import { Card, Button } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import MarketListItem from "./market-list-item/MarketListItem";
import { useDispatch, useSelector } from "react-redux";
import { Creators as MarketListActions } from '../../store/actions/market-list';

const MarketList = ( props ) => {
	
	const marketLists = useSelector(state => state.marketLists.marketLists);
	const dispatch = useDispatch();	

	const [ addingList, toggleAddingList ] = useState( false );

	useEffect(() => {
		dispatch( MarketListActions.loadMarketLists() );
	}, [dispatch]);
	
	const onSaveMarketList = (ml) => {
		dispatch( MarketListActions.createMarketList(ml) );
		toggleAddingList(false);
	}

	const onUpdateMarketList = (ml) => {
		console.log('Editando o ML:', ml);
	}

	const handleRemoveList = (ml) => {
		dispatch( MarketListActions.deleteMarketList(ml) );
	}

	return (
		<section className="list">

			{ marketLists.map((list, idx) => 
				<MarketListItem 
					key={ idx } 
					onRemove={ () => handleRemoveList(list) } 
					onSaveMarketList={ (ml) => onUpdateMarketList.bind(this, ml) } 
					{ ...list }
				/>	
			) }

			{ addingList && 
				<MarketListItem 
					onRemove={ () => undefined } 
					name='' description='' market='' 
					isCreating={ true } 
					toggleAddingList={ () => toggleAddingList(false) }
					onSaveMarketList={ (ml) => onSaveMarketList.bind(this, ml) }
				/>
			}

			{ !addingList && 
				<Card className="list-card add-list">
					<Button onClick={ () => toggleAddingList(true) } >
						<FontAwesomeIcon color="#3f53b5" icon={ faPlusCircle } size="lg"/>
					</Button>
				</Card>
			}
		</section>
	);
}

export default MarketList;