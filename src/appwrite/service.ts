import {ID,Account,Client} from 'appwrite'
import Config from 'react-native-config'
import Snackbar from 'react-native-snackbar'

const appwriteClient = new Client()
const APPWRITE_ENDPONT:string = Config.APPWRITE_ENDPONT!
const APPWRITE_PROJECT_ID:string = Config.APPWRITE_PROJECT_ID!

//create type to reg and login user

type CreateUserAccount = {
    email:string;
    password:string;
    name:string;
}

type LoginUserAccount= {
    email:string;
    password:string;
}

class AppwriteService{
    account; //golbal

    //create constructor to know if user is loggedin or not talking to appwrite cloud server ....auto connect
    constructor(){
        appwriteClient
        .setEndpoint(APPWRITE_ENDPONT)
        .setProject(APPWRITE_PROJECT_ID)

        this.account= new Account(appwriteClient)

    }

    async createUserAccount({email,password,name}:
        CreateUserAccount){
            try {
                const usersAccount = await this.account.create(ID.unique(),email,password,name)
                if(usersAccount){
                    //if account exist login user and take to landing page
                    //authenticate the user

                    //TODO:: cretae login feature
                    return this.login({email,password})
                }else{
                    return usersAccount
                }
            } catch (error) {
                Snackbar.show({
                    text:String(error),
                    duration:Snackbar.LENGTH_LONG
                })
                console.log("Appwrite Service:: createAccount()::"+error)
            }
        }
    async login({email,password}:LoginUserAccount){
        try {
            return await this.account.createEmailSession(email,password)
        } catch (error){
            Snackbar.show({
                text:String(error),
                duration:Snackbar.LENGTH_LONG
            })
            console.log("Appwrite Service:: loginAccount()::"+error)
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite Service:: getCurrentUser()::"+error)
        }
    }

    async logout(){
        try {
            return await this.account.deleteSession('current');
        } catch (error) {
            console.log("Appwrite Service:: logout()::"+error)
        }
    }
}

export default AppwriteService