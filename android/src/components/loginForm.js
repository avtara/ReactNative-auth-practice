import React,{Component} from 'react';
import {
    View,
    ActivityIndicator,
    Text,
    StyleSheet
} from 'react-native';
import firebase from 'firebase';
import {Button,Card,CardSection,Spinner} from './common'
import Input from './common/input';

class LoginFrom extends Component {
    state={email:'',password:'',error:'',loading:false};

    onButtonPressed(){
    this.setState({error:'',loading:true});
    const {email,password} = this.state; 
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(this.onLoggingSuccess.bind(this))
    .catch(()=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(this.onLoggingSuccess.bind(this))
        .catch(this.onLoggingFail.bind(this))
        })
    };

    onLoggingSuccess(){
        this.setState({
          email:'',
          password:'',
          loading:false,
          error:'' 
        });
    }

    onLoggingFail(){
        this.setState({
            error:'Belum ada user! Berhasil mendaftar',
            loading:true
        });
    }

    renderButton(){
    if (this.state.loading){
         return <View style={{flex:1,
            justifyContent:'center',
            alignItems:'center'}}>
         <ActivityIndicator size={'large'} color={'#0000ff'} />
     </View>;
     }
     return(
    <Button onPress={this.onButtonPressed.bind(this)}>
        Log In
    </Button>
     );
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                    placeholder='joko@gmail.com'
                    label='Email'
                    value={this.state.email}
                    onChangeText={email=>this.setState({email})}/>
                </CardSection>
                <CardSection>
                <Input
                    secureTextEntry
                    placeholder='password'
                    label='Password'
                    value={this.state.password}
                    onChangeText={password=>this.setState({password})}/>
                </CardSection>
                <Text style={styles.errorStyles}>{this.state.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles= StyleSheet.create({
    errorStyles:{
        alignSelf:'center',
        fontSize:20,
        color:'red'
    }
});

export default LoginFrom;