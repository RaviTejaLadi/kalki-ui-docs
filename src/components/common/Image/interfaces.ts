import { VariantProps } from "class-variance-authority";
import { imageVariants } from "./imageVariants";
import { LoadingStrategy, ObjectFit } from "./types";

export interface ImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof imageVariants> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  priority?: boolean;
  loading?: LoadingStrategy;
  objectFit?: ObjectFit;
  onLoad?: () => void;
  onError?: () => void;
  className?: string;
  variant?: "default" | "rounded" | "circle";
  sizes?: string;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
}
