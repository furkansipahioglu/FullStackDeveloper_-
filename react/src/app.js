
        /* jxs: javascpirt xml=js içindeki etiketleri birer obje gibi yazmamzı sağlıyor*/
        /*var template2=<h1>my first react app</h1>;*/
        var root=document.getElementById("root");


        var productname="samsung";
        var productprice=4000;
        var productdesc="bu bir telefon";


        function formatprice(p){
            return p+" TL";
        }

var product={
    name:"",
    price:2000,
    description:"telefonn",
    types:["blue","red"]
}

function getdescription(description){
    /*if(description){
        return description;
    }
    else{
        return "no desc";
    }*/
    /*if(description){
        return <h5 style={{color:"red"}}> description:{description}</h5>
    }*/
    return description? description:"no desc"



}

function formatprice2(p){
    return p.price +" TL";
}
        /* react */
        var template= <div>
            
            
                <h1 id="productname">Name: {product.name ? product.name:"no name"}</h1>
                <p id="productprice">Price:{formatprice(productprice)}</p>
                <p id="productprice">Price:{formatprice2(product)}</p>
                <p id="productprice">Price:{product.price==0 ? "free" : product.price}</p>
                <p id="productdesc">{getdescription(product.description)}</p>
                <p>{product.types.length ? " 2 tip var": " 1 seçenek "}</p>
                <p>
                    {
                        product.types.map((item)=><p>{item}</p>)
                    }

                </p>

        </div>;

        /* react dom */ 
        ReactDOM.render(template,root);