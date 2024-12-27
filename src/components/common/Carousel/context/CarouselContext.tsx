import { createContext } from "react";
import { CarouselContextType } from "../types";

export const CarouselContext = createContext<CarouselContextType | undefined>(undefined);
