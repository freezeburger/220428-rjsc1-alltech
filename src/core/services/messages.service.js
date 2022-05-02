
import { ApiClient } from "../utils/api-client";


const messages = [];

export const MessagesService = {

    init(){
        this.load();
    },

    load(){
        ApiClient.read('messages').then(res => {
            messages.push(...res);
        });
    },

    refresh(msg){
        messages.length = 0;
        this.load();
    },

    create(msg){
        ApiClient.create('messages', msg).then(res => {
            messages.push(res);
        });
    }

}