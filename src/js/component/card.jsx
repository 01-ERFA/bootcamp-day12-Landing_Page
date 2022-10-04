import React from "react";

const Card = () => {
    let imgs = ["https://i.pinimg.com/736x/24/18/7a/24187a33a4cf1e423bcce6335fa54f7d.jpg",
    "https://i.pinimg.com/736x/f0/d5/76/f0d576ad987daf841a3ac9fd8e1164f6.jpg",
    "https://img.freepik.com/vector-premium/cute-dibujos-animados-unicornio-flor-kawaii-animal_70350-1076.jpg",
    "https://media.tenor.com/CEY8MVxSKZEAAAAC/kawaii-cute.gif",
    "https://img.freepik.com/vector-premium/cute-dibujos-animados-unicornio-regalo-navidad-animal-kawaii_70350-630.jpg?w=2000",
    "https://papik.pro/en/uploads/posts/2022-06/1654822497_1-papik-pro-p-cute-kawaii-cats-cute-drawings-1.jpg",
    "https://i.pinimg.com/originals/08/f9/e7/08f9e71697023cf5eccf1dc476304ff3.jpg"]
    let img_random = imgs[(Math.floor(Math.random() * imgs.length))]
    return (
        <div class="card m-auto" style={{width: "16rem"}}>
            <img src={img_random} class="card-img-top" />
            <div class="card-body">
                <h5 class="card-title text-center">Card title</h5>
                <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores praesentium reiciendis.</p>
                <br />
                <a href="#" class="btn btn-primary container-fluid">Find Out More!</a>
            </div>
        </div>
    );
}

export default Card;