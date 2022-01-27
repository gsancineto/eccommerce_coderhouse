import ItemCount from "./ItemCount"
export default function ItemDetail({item}){

    return (
        <div>
            <div class="container">
                <div class="card">
                    <div class="container-fliud">
                        <div class="wrapper row">
                            <div class="preview col-md-6">
                                
                                <div class="preview-pic tab-content">
                                <div class="tab-pane active" id="pic-1"><img src={item.img} width="50%" height="50%"/></div>
                                </div>
                                
                            </div>
                            <div class="details col-md-6">
                                <h3 class="product-title">{item.title}</h3>
                                <p class="product-description">{item.descLong}</p>
                                <h4 class="price">Precio: <span>${item.price}</span></h4>
                                <ItemCount stock={item.stock} initial={item.initial}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}