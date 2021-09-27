import React, {useState} from 'react'
import "./App.css"
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg";

const App = ()=>{

    const [like, setLike] = useState(0)
    const [image, setImage] = useState(null)

    const handleLike = ()=>{
        setLike((prevState) => prevState + 1);
        setImage(img1)
    }

    const handleDislike = ()=>{
        setLike((prevState) => prevState - 1);
        setImage(img2)
    }

    return (
      <>
        <div className="container">
            <div className="image">
              <img src={image} alt="Like :-) or Dislike :-(" />
            </div>
            <div className="actions">
              <span className="like" onClick={handleLike} >like</span>
              <span className="dislike" onClick={handleDislike} >dislike</span>
            </div>
            <div className="count">
                <span>
                    {like}
                </span>
            </div>
        </div>
      </>
    );
}

export default App;