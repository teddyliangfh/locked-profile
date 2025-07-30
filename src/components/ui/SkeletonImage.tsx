"use client";

import { Box, Skeleton } from "@chakra-ui/react";
import NextImage from "next/image";
import { useState } from "react";

interface SkeletonImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  borderRadius?: string;
  sizes?: string;
  loading?: "lazy" | "eager";
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Skeleton image component with loading states and Next.js Image optimization.
 *
 * Features:
 * - Skeleton loading state
 * - Next.js Image optimization
 * - Blur placeholder support
 * - Customizable styling
 * - Error handling
 *
 * @param src - Image source URL
 * @param alt - Alt text for accessibility
 * @param width - Image width (default: 300)
 * @param height - Image height (default: 300)
 * @param objectFit - CSS object-fit property (default: "cover")
 * @param borderRadius - Border radius for the image container
 * @param sizes - Responsive image sizes for Next.js Image
 * @param loading - Loading strategy (default: "lazy")
 * @param placeholder - Placeholder type (default: "blur")
 * @param blurDataURL - Blur placeholder URL
 * @param onLoad - Callback when image loads
 * @param onError - Callback when image fails to load
 * @param className - Additional CSS classes
 * @param style - Additional inline styles
 */
export function SkeletonImage({
  src,
  alt,
  width = 300,
  height = 300,
  objectFit = "cover",
  borderRadius,
  sizes = "(max-width: 300px) 100vw, 300px",
  loading = "lazy",
  placeholder = "blur",
  blurDataURL = "https://placehold.co/400",
  onLoad,
  onError,
  className,
  style,
}: SkeletonImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setError(true);
    onError?.();
  };

  return (
    <Box
      position="relative"
      overflow="hidden"
      borderRadius={borderRadius}
      className={className}
      style={style}
    >
      <Skeleton loading={!loaded && !error} w="100%" h="100%">
        <NextImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{ 
            objectFit, 
            width: "100%", 
            height: "100%",
            borderRadius: borderRadius || "inherit"
          }}
          sizes={sizes}
          loading={loading}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          onLoad={handleLoad}
          onError={handleError}
        />
      </Skeleton>
    </Box>
  );
} 