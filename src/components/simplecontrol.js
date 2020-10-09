import React, { Component } from 'react';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import axios from "axios";
import {host, path} from "../utils";

class simplecontrol extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stats: false
        };
    }

    checkState() {
        axios(path.status)
        .then(data => this.setState({stats: data.data.data}))
        .catch(err => console.error(err))
    }

    switchState(state) {
        axios(`${host}/${state}`)
        .then(data =>this.setState({stats: data.data.data}))
        .catch(err => console.error(err))
    }
    
    render() {
        this.checkState()
        return (
            <div>
                <CardActions style={{justifyContent: 'center', marginTop: '25px'}}>
                    <h1>Control LED</h1>
                </CardActions>
                <CardActions style={{justifyContent: 'center', marginTop: '10px'}}>
                     <h3>Condition : {this.state.stats ? "ON" : "OFF"} </h3>
                </CardActions>
                <CardActions style={{justifyContent: 'center', marginTop: '100px'}}>
                    <Button  onClick={() => this.switchState("on")} variant="contained" color="primary" style={{padding: '25px 50px 25px 50px'}}>
                        ON
                    </Button>
                </CardActions>
                <CardActions style={{justifyContent: 'center', marginTop: '100px'}}>
                    <Button onClick={() => this.switchState("off")} variant="contained" color="secondary" style={{padding: '25px 50px 25px 50px'}}>
                        OFF
                    </Button>
                </CardActions>
            </div>
        );
    }
}

export default simplecontrol;
