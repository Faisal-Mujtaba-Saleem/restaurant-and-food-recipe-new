import React, { useContext, useEffect, useRef, useState } from 'react';
import ALIQUAM_TINCIDUNT_Dessert_Restaurant from '../assets/gallery-images/ALIQUAM TINCIDUNT Dessert, Restaurant.jpg';
import ALIQUAM_TINCIDUNT_Dessert from '../assets/gallery-images/ALIQUAM TINCIDUNT Dessert.jpg';
import ALIQUAM_TINCIDUNT_Restaurant from '../assets/gallery-images/ALIQUAM TINCIDUNT Restaurant.jpg';
import ALIQUAM_TINCIDUNT_Restaurant2 from '../assets/gallery-images/ALIQUAM TINCIDUNT Restaurant (2).jpg';
import ALIQUAM_TINCIDUNT_Dinner from '../assets/gallery-images/ALIQUAM TINCIDUNT Dinner.jpg';
import ALIQUAM_TINCIDUNT_Dinner2 from '../assets/gallery-images/ALIQUAM TINCIDUNT Dinner (2).jpg';
import ALIQUAM_TINCIDUNT_Dinner3 from '../assets/gallery-images/ALIQUAM TINCIDUNT Dinner (3).jpg';
import ALIQUAM_TINCIDUNT_Dinner4 from '../assets/gallery-images/ALIQUAM TINCIDUNT Dinner (4).jpg';
import SectionHead from '../components/commons/SectionHead'
import ImageCard from '../components/galleryComponents/GalleryImageCard';
import { RefContext } from '../contexts/RefContext';

const sectionTitle = "Our Gallery"
const sectionDescription = "Morbi in sem quis dui placerat ornare."

const gallery = [
    {
        label: "ALIQUAM TINCIDUNT",
        album: "Dessert, Restaurant",
        src: ALIQUAM_TINCIDUNT_Dessert_Restaurant,
        id: "Dessert_&_Resturant"
    },
    {
        label: "ALIQUAM TINCIDUNT",
        album: "Dinner",
        src: ALIQUAM_TINCIDUNT_Dinner,
        id: "dinner1"
    },
    {
        label: "ALIQUAM TINCIDUNT",
        album: "Restaurant",
        src: ALIQUAM_TINCIDUNT_Restaurant,
        id: "resturant1"
    },
    {
        label: "ALIQUAM TINCIDUNT",
        album: "Restaurant",
        src: ALIQUAM_TINCIDUNT_Restaurant2,
        id: "resturant2"
    },
    {
        label: "ALIQUAM TINCIDUNT",
        album: "Dinner",
        src: ALIQUAM_TINCIDUNT_Dinner2,
        id: "dinner2"
    },
    {
        label: "ALIQUAM TINCIDUNT",
        album: "Dinner",
        src: ALIQUAM_TINCIDUNT_Dinner3,
        id: "dinner3"
    },
    {
        label: "ALIQUAM TINCIDUNT",
        album: "Dinner",
        src: ALIQUAM_TINCIDUNT_Dinner4,
        id: "dinner4"
    },
    {
        label: "ALIQUAM TINCIDUNT",
        album: "Dessert",
        src: ALIQUAM_TINCIDUNT_Dessert,
        id: "Dessert"
    },
]
const albums = [
    "all", "dessert", "restaurant", "dinner"
]
function Gallery() {
    const [albumState, setAlbumState] = useState("all");

    const galleryRef = useRef(null);
    const { setGalleryRef } = useContext(RefContext);
    useEffect(() => {
        setGalleryRef(galleryRef);
    }, [])

    function handleAlbumClick(e) {
        setAlbumState(e.target.innerText.toLowerCase());
    }
    return (
        <section ref={galleryRef} className="text-gray-600 body-font">
            <div className="pt-24 pb-20">
                <SectionHead sectionTitle={sectionTitle} sectionDescription={sectionDescription} titleTextClr={"black"} />
                <div className="flex justify-center items-center mx-auto border-0 overflow-hidden -mt-8 text-sm text-[#999999] font-extralight leading-relaxed tracking-tight font-rubic">
                    {
                        albums.map(
                            (album, index) => {
                                const BtnTxtClr = album === albumState ? "[#f4b350]" : "[#999999]"
                                return (
                                    <React.Fragment key={index}>
                                        <button tabIndex={index + 1} className={`px-3 focus:outline-none uppercase cursor-pointer text-${BtnTxtClr}`} onFocus={handleAlbumClick}>
                                            {album}
                                        </button>
                                        {index !== albums.length - 1 && <span> / </span>}
                                    </React.Fragment>
                                )
                            }
                        )
                    }
                </div>
                <div className="flex flex-wrap -my-4 w-screen">
                    {
                        albumState === "all" ?
                            gallery.map(
                                image => <ImageCard key={image.id} image={image} />
                            ) :
                            gallery.filter(
                                (image) => image.album.toLowerCase().includes(albumState)
                            )
                                .map(
                                    filteredImage => <ImageCard key={filteredImage.id} image={filteredImage} />
                                )
                    }
                </div>
            </div>
        </section>
    )
}

export default Gallery
