import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {TextField} from "@material-ui/core";
import {JwtService} from "../services/JwtService";
import cookies from "react-cookies";
import {TOKEN_COOKIE_NAME} from "../constant";

export default function LoginDialog(props) {
    let username;
    let password;


    return (
        <div>

            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Please login</DialogTitle>
                <DialogContent>
                    <TextField id="standard-basic" label="Username" fullWidth onChange={e => username = e.target.value}/>
                    <TextField id="standard-basic" label="Password" fullWidth type="password" onChange={e => password = e.target.value}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={login} color="primary" autoFocus>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

    function login() {
        JwtService.authenticate(username, password) //promise
            .then(response => { //if succeeded
                const token = response.data.id_token;
                cookies.save(TOKEN_COOKIE_NAME, token);
                window.location.reload();
            })
            .catch(error => console.log(String(error))) //if failed
    }
}