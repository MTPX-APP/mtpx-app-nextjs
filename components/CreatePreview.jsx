import React from "react";
import ArtInfoView from "../components/ArtInfoView";

const CreatePreview = ({ mintImage, userImage, artName, price, userName, burnPrice,  }) => {
  return (
    <ArtInfoView 
		mintImage={mintImage}
		userImage={userImage}
		artName={artName}
		price={price}     
		userName={userName}
		burnPrice={burnPrice}
		/>
  );
};
export default CreatePreview;
