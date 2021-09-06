import Image from "next/image";
import React, { useState, useRef } from "react";
import { Galleria } from 'primereact/galleria';
import { Colors, imageAssets } from "../core/Constants";
import Helpers from '../core/Utils/Helpers';

import styles from "../styles/components/ArtDetailsImage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye, faExpand, faCompress, faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


const ArtDetailsImage = ({
  expandIsActive, // Handles if expandIsActive
  parentStyles, // Handles parent style cascade down
  handleExpandView, // Handles onClick toggle
  }) => {

  const gallery1 = useRef(null);
  const [showLike, setShowLike]  = useState(false);
  const [showFadeOut, setShowFadeOut]  = useState(false);

  const itemTemplate = (item) =>{
    return <div className={styles.fullscreenImage}><Image src={item.imageSrc} alt={item.alt} /></div>;
  }

  const responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  const imagCollection = [
    {imageSrc: imageAssets.artDetailsImage, alt: 'test'}
  ];

  const handleGallery = () => {
    gallery1.current.show();
  }

  const dblClick = Helpers.useSingleAndDoubleClick(function() {
    console.log(1);
  }, function() {
    setShowLike(true);
    setTimeout(() => {
      setShowFadeOut(true);
      setTimeout(() => { 
        setShowLike(false);
        setShowFadeOut(false);
      }, 1000);
    }, 1000);
  });

  return (
    <>
      <div className={`${styles.container} ${parentStyles.expandViewImageContainer} ${expandIsActive ? styles.expandViewInner : ''}`}>
        <Galleria 
          ref={gallery1} 
          value={imagCollection} 
          item={itemTemplate}  
          fullScreen
          responsiveOptions={responsiveOptions}
          numVisible={1}
          showItemNavigators={false}
          showThumbnails={false}
        ></Galleria>
        <div className={` ${styles.imageContainer}`}>
          <div className={styles.inner}>
            {
              expandIsActive ? (
                <Image
                  src={imageAssets.artDetailsImage}
                  layout="fill"
                  objectFit={`contain`}
                  className={styles.artImage}
                  alt="Art Image"
                  placeholder="blur"
                />
              ) : (
                <Image
                  src={imageAssets.artDetailsImage}
                  width={640}
                  height={768}
                  layout="responsive"
                  objectFit={`cover`}
                  className={styles.artImage}
                  alt="Art Image"
                  placeholder="blur"
                />
              )
            }
          </div>
          <div className={styles.likeDoubleClick} onClick={dblClick}>
          { showLike &&
            <FontAwesomeIcon
                icon={faHeart}
                className={`${styles.likeIcon} ${showFadeOut && styles.fadeOut}`}
                color={Colors.pink}
                />
            }
          </div>
        </div>
        <div className={`p-mt-3 p-d-flex p-jc-between ${styles.imageControls}`}>
          <div className={`p-d-flex ${styles.artIcons}`}>
            <p className="p-mr-4 p-d-flex p-ai-center">
            <FontAwesomeIcon
              icon={faEye}
              className={styles.viewIcon}
              color={Colors.lightGrey}
              /> {"2, 100"}
            </p>
          </div>
          <div className={`p-mr-3`}>
            <div className={`${styles.artIcons} ${styles.artIconRight}`}>
              <div onClick={() => handleGallery()}>
                <FontAwesomeIcon
                  icon={faSearchPlus}
                  className={styles.searchPlusIcon}
                  color={Colors.darkGrey}
                />
              </div>
              <div onClick={handleExpandView}>
                <FontAwesomeIcon
                  icon={expandIsActive ? faCompress : faExpand}
                  className={`${styles.expandIcon} ${parentStyles.btnExpandIcon}`}
                  color={Colors.darkGrey}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtDetailsImage;
