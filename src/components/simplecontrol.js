import React, { Component } from 'react';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

class simplecontrol extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div>
                <CardActions style={{justifyContent: 'center', marginTop: '25px'}}>
                    <h1>Control LED</h1>
                </CardActions>
                <CardActions style={{justifyContent: 'center', marginTop: '10px'}}>
                     <h3>Condition : </h3>
                </CardActions>
                <CardActions style={{justifyContent: 'center', marginTop: '100px'}}>
                    <Button variant="contained" color="primary" style={{padding: '25px 50px 25px 50px'}}>
                        ON
                    </Button>
                </CardActions>
                <CardActions style={{justifyContent: 'center', marginTop: '100px'}}>
                    <Button variant="contained" color="secondary" style={{padding: '25px 50px 25px 50px'}}>
                        OFF
                    </Button>
                </CardActions>
            </div>
        );
    }
}

export default simplecontrol;