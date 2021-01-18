import React from 'react';
import ContentLoader from "react-content-loader"

const LoadingCard = () => {
    return (
        <ContentLoader 
            speed={2}
            viewBox="0 0 400 190"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0%" y="0%" rx="5" ry="5" width="48%" height="100%" /> 
            <rect x="52%" y="10%" rx="5" ry="5" width="20%" height="16" /> 
            <rect x="52%" y="22%" rx="5" ry="5" width="40%" height="20" /> 
            <rect x="52%" y="40%" rx="5" ry="5" width="36%" height="14" /> 
            <rect x="52%" y="49%" rx="5" ry="5" width="33%" height="14" /> 
            <rect x="52%" y="80%" rx="5" ry="5" width="12%" height="24" /> 
            <rect x="73%" y="76%" rx="5" ry="5" width="23%" height="40" /> 
        </ContentLoader>
    )
}

export default LoadingCard