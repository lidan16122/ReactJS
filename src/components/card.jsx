const Card = () => {
    const card = {
       img: { 
            title: 'first card',
            url: "https://cdn.pixabay.com/photo/2022/01/25/16/01/sky-6966721_960_720.jpg",
            alt: "sky pic",
    },
    description: 'this is the first card',
    phone: '050-1234567',
    address: 'la la land',
    number: '1000000',
    };

    const width = {
        width: "18rem",
    }

    return (
        <div class="card" style={width}>
            <img class="card-img-top" src={card.img.url} alt={card.img.alt}/>
            <div class="card-body" width={width.width}>
                <h5 class="card-title">{card.img.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{card.description}</h6>
                <div class="card-text">
                    <div> <span className="card-title">Tel:</span> {card.phone} </div>
                    <div> <span className="card-title">Address:</span> {card.address} </div>
                    <div> <span className="card-title">Card Number:</span> {card.number} </div>
                </div>
            </div>
        </div>
    );
}

export default Card;