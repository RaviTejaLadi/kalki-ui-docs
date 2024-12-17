import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/utils';
import { imageVariants } from './imageVariants';
import { BlurPlaceholder } from './BlurPlaceholder';
import { ImageProps } from './types';

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  quality = 75,
  priority = false,
  loading: propLoading,
  objectFit = 'cover',
  onLoad,
  onError,
  className,
  variant = 'default',
  sizes,
  placeholder = 'empty',
  blurDataURL,
  ...rest
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const loading = priority ? 'eager' : propLoading || 'lazy';

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setError(true);
    onError?.();
  };

  useEffect(() => {
    if (!imgRef.current || loading === 'eager') return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = src;
          observer.unobserve(img);
        }
      });
    });

    observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, [src, loading]);

  const optimizedSrc = src.includes('?') ? `${src}&q=${quality}` : `${src}?q=${quality}`;

  return (
    <div className={cn('relative', width && `w-[${width}px]`, height && `h-[${height}px]`, className)}>
      {placeholder === 'blur' && isLoading && blurDataURL && <BlurPlaceholder dataURL={blurDataURL} />}

      <img
        ref={imgRef}
        src={loading === 'eager' ? optimizedSrc : undefined}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
        loading={loading}
        sizes={sizes}
        className={cn(
          imageVariants({ variant, objectFit }),
          isLoading ? 'opacity-0' : 'opacity-100',
          error && 'hidden'
        )}
        {...rest}
      />

      {error && (
        <div className="flex items-center justify-center w-full h-full text-base p-5 rounded border bg-gray-100 text-gray-500">
          Failed to load image
        </div>
      )}
    </div>
  );
};

export default Image;
