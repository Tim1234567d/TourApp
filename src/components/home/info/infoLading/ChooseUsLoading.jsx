 import React from "react";
 import ContentLoader from "react-content-loader"


 const ChoosUsLoading = () => {
     return (
        <ContentLoader 
        speed={0}
        width={448}
        height={295}
        viewBox="0 0 448 295"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
   
      >
        <rect x="0" y="0" rx="9" ry="9" width="210" height="40" /> 
        <rect x="-5" y="128" rx="10" ry="10" width="408" height="96" />
      </ContentLoader>
     )
 }

 export default ChoosUsLoading;

