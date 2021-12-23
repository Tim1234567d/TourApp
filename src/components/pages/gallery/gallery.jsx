import { useState, useEffect } from "react";
import React from "react"; 
import {SRLWrapper} from 'simple-react-lightbox'
import { images } from "./data";


const Gallery = () => { 

  const [tag, setTag] = useState('all');
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect( () => { tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image =>
     image.tag === tag));
},[tag]);

    return (
        <section className="section-gallery">
      <div className="wrapper">
        <div className="photo-big-2"><img src="./img/pngCard/Burana-Tower.jpg" alt="" /></div>


        <h1 className="gallery-title">Gallery</h1>
      <div className="container-1">
        <div className="all-photos">
        <SRLWrapper>

          <div className="image__wrapper">
            {filteredImages.map((image)  => 
            <div key={image.id} className="image__card"> 
            <a href= {`/img/gallery/${image.imageName}`}>
                <img  className="imageee" src={`/img/gallery/${image.imageName}`} alt="123" />
            </a> 
            </div>)
            }         
          </div>
          </SRLWrapper>

        </div>
        
 
        <div className="sidebar">
          <div className="sidebar__section">
            <h2 className="sidebar__title">Туристические места</h2>


            <div className="sidebar__item"><TagButton name="all" handleSetTag={setTag}  tagActive={tag === 'all' ? true : false}/></div>
            <div className="sidebar__item"><TagButton name="Бишкек"handleSetTag={setTag}  tagActive={tag === 'Бишкек' ? true : false}/></div>
            <div className="sidebar__item"><TagButton name="Нарын" handleSetTag={setTag} tagActive={tag === 'Нарын' ? true : false}/></div>
            <div className="sidebar__item"><TagButton name="Ыссык-Куль"handleSetTag={setTag} tagActive={tag === 'Ыссык-Куль' ? true : false}/></div>
            <div className="sidebar__item"><TagButton name="Талас"handleSetTag={setTag} tagActive={tag === 'Талас' ? true : false}/></div>
            <div className="sidebar__item"><TagButton name="Жалал-Абад"handleSetTag={setTag} tagActive={tag === 'Жалал-Абад' ? true : false}/></div>
            <div className="sidebar__item"><TagButton name="Ош"handleSetTag={setTag} tagActive={tag === 'Ош' ? true : false}/></div>
            <div className="sidebar__item"><TagButton name="Баткен"handleSetTag={setTag} tagActive={tag === 'Баткен' ? true : false}/></div>
            

          </div>
        </div>

      </div>

        
      </div>

    </section> 
    )
}

const TagButton = ({name, handleSetTag, tagActive}) =>{
   return <button className={  `${tagActive ? "active" : "btn"}`} onClick={() => handleSetTag(name)}> {name.toUpperCase()} </button>
}

export default Gallery;