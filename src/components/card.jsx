const Card =({card, handleDelete}) => {
    const width = {
        width: "18rem",
    }
    const {img , description , phone , address , number , id} = card;
    return (
        <div class="card" style={width}>
            <img class="card-img-top" src={img.url} alt={img.alt}/>
            <div class="card-body" width={width.width}>
                <h5 class="card-title">{img.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{description}</h6>
                <div class="card-text">
                    <div> <span className="card-title">Tel:</span> {phone} </div>
                    <div> <span className="card-title">Address:</span> {address} </div>
                    <div> <span className="card-title">Card Number:</span> {number} </div>
                </div>
            </div>
            <div>
                <span className="cursor" onClick={() => handleDelete(id)}>Delete |</span>
                <span className="cursor"> Edit</span>
            </div>
        </div>
    );
}

export default Card;