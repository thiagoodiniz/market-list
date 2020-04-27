import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CardActions, Button, TextField } from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStore } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

const MarketListItem = (props) => {
    const [ isEditing, toggleIsEditing ] = useState(false);
    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ market, setMarket ] = useState('');

    // setting properties that comming from props
    useEffect(() => {
        setName(props.name);
        setDescription(props.description);
        setMarket(props.market);
    }, [props.name, props.description, props.market]);

    return(
        <Card className="list-card">
            { !isEditing && !props.isCreating &&
                <>
                    <CardContent className="list-card__content">
                        <Typography component="h6" variant="h6">
                            { name }
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            { description }
                        </Typography>

                        { market &&
                        <Typography variant="subtitle2" color="textSecondary">
                            <FontAwesomeIcon icon={ faStore } style={{ marginRight: '5px' }}/>
                            { market }
                        </Typography>
                        }
                    </CardContent>

                    <CardActions>
                        <Button size="small" color="primary" onClick={ () => toggleIsEditing(!isEditing) }>
                            Editar
                        </Button>
                        <Button size="small" color="primary" onClick={ props.onRemove } >
                            Remover
                        </Button>
                    </CardActions>
                </>
            }

            { (isEditing || props.isCreating) &&
                <>
                    <CardContent className="list-card__content">
                        <TextField
                            label="Título da lista"
                            value={ name }
                            onChange={ e => setName(e.currentTarget.value) }
                            autoFocus
                        />
                        <TextField
                            label="Descrição"
                            value={ description }
                            onChange={ e => setDescription(e.currentTarget.value) }
                        />

                        <TextField
                            label="Mercado"
                            value={ market }
                            onChange={ e => setMarket(e.currentTarget.value) }
                        />
                    </CardContent>

                    <CardActions>
                        <Button size="small" color="primary" onClick={ () => props.isCreating ? props.toggleAddingList() : toggleIsEditing(!isEditing) }>
                            Cancelar
                        </Button>
                        <Button size="small" color="primary" onClick={ props.onSaveMarketList({ name, description, market }) }>
                            Salvar
                        </Button>
                    </CardActions>
                </>
            }
        </Card>
    );
}

MarketListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    market: PropTypes.string,
    isCreating: PropTypes.bool,
    onRemove: PropTypes.func,
    toggleAddingList: PropTypes.func
  };

export default MarketListItem;