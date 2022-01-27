import { Data } from "./Data";

export const getItems = new Promise((res,rej)=>{
    if(true){
        setTimeout(()=>{
            res(Data);
        },2000);
    }else{
        rej('404 not found');
    }
})