import React from "react";
import ContentLoader from "react-content-loader"

const BlogLoader = () => {
    return (
        <ContentLoader 
    speed={0}
    width={295}
    height={633}
    viewBox="0 0 295 633"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    <rect x="0" y="0" rx="10" ry="10" width="295" height="295" /> 
    <rect x="0" y="357" rx="10" ry="10" width="295" height="118" /> 
    <rect x="87" y="530" rx="10" ry="10" width="118" height="66" />
  </ContentLoader>
    )
}

export default BlogLoader;