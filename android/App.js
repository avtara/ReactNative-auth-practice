import React,{Component} from 'react';
import {
    View,ActivityIndicator,
} from 'react-native';
import {Header, Button} from './src/components/common';
import firebase from 'firebase';
import LoginForm from './src/components/loginForm.js';



class App extends Component{
    state = {loggedIn:null};


    componentWillMount(){
        firebase.initializeApp({
            apiKey: "Your-API-Key",
            authDomain: "Your-auth-domain",
            databaseURL: "Your-database-url",
            projectId: "Your-project-ID",
            storageBucket: "Your-storage-bucket",
            messagingSenderId: "Your-message-sender-ID"
          });



    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            this.setState({loggedIn:true});
        } else {
            this.setState({loggedIn:false});
        }
    });
    }
    
    renderContent() {
        switch (this.state.loggedIn){
            case true:
                return (<Button  onPress ={()=> firebase.auth().signOut()}>Log out</Button>
                ); 
            case false:
                return <LoginForm/>;
            default:
            <ActivityIndicator size={'large'} color={'#0000ff'} />;
        }     
    }

    render(){
        return(
            <View>
                <Header HeaderText='Auth' />
                {this.renderContent()}
            </View>
        )
    };
};

export default App;