let imgUrl = 'https://i.pinimg.com/originals/ed/d4/c1/edd4c1a752305f8f3bb9c2b34913728e.jpg';
let obj = [{id: 1, title:'Avengers 1', img: imgUrl, desc: 'El numero 1 de los Avenger!', price: 200, stock: 100, initial: 0}];
export const getItems = new Promise((res,rej)=>{
    if(true){
        setTimeout(()=>{
            res(obj);
        },2000);
    }else{
        rej('404 not found');
    }
})