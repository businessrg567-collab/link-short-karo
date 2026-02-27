'use client';

import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fallbackSrc?: string;
}

export default function SafeImage({ 
    src, 
    alt, 
    fallbackSrc = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    className,
    style,
    ...props 
}: SafeImageProps) {
    const [imgSrc, setImgSrc] = useState(src);

    React.useEffect(() => {
        setImgSrc(src);
    }, [src]);

    return (
        <img
            {...props}
            src={imgSrc}
            alt={alt}
            className={className}
            style={style}
            onError={() => {
                if (imgSrc !== fallbackSrc) {
                    setImgSrc(fallbackSrc);
                }
            }}
        />
    );
}
