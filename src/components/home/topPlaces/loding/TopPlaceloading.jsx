import React from "react";
import ContentLoader from "react-content-loader"


const TopPlaceLoading = () => {
    return (
        <ContentLoader 
    speed={2}
    width={295}
    height={540}
    viewBox="0 0 295 540"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="0" rx="10" ry="10" width="295" height="295" /> 
    <rect x="0" y="338" rx="10" ry="10" width="295" height="120" /> 
    <rect x="0" y="492" rx="10" ry="10" width="118" height="46" />
  </ContentLoader>
    )
}

export default TopPlaceLoading;