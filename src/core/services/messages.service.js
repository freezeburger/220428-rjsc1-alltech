
import { ApiClient } from "../utils/api-client";

const messages = [];

export const MessagesService = {

    init(){
        return this.load();
    },

    get(){
       return messages
    },

    load(){
        return ApiClient.read('messages').then(res => {
            messages.push(...res);
        });
    },

    refresh(msg){
        messages.length = 0;
        return this.load();
    },

    create(msg){
        return ApiClient.create('messages', msg).then(res => {
            messages.push(res);
        });
    }

}