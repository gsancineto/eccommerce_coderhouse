import ItemCount from "./ItemCount"
export default function ItemDetail({item}){

    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">
                                
                                <div className="preview-pic tab-content">
                                <div className="tab-pane active" id="pic-1"><img src={item.img} width="50%" height="50%"/></div>
                                </div>
                                
                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{item.title}</h3>
                                <p className="product-description">{item.descLong}</p>
                                <h4 className="price">Precio: <span>${item.price}</span></h4>
                                <ItemCount stock={item.stock} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}