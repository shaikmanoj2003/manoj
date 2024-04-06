import React, { useState } from 'react';
import man from './Product';

const GalleryDemo = () => {
    const [demo, setDemo] = useState(man);
    return (
        <div>
            {demo.map((ele, index) => {
                const { Image } = ele; // Destructure 'Image' directly
                const itemName = ele.name; // Declare 'itemName' as a local variable
                return (
                    <div className="card" style={{ width: "18rem" }}>
                        <img src= {ele.image} className="card-img-top" alt={itemName} />
                        <div className="card-body">
                            <h5 className="card-title">{itemName}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default GalleryDemo;
