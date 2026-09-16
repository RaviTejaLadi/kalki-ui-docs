import { Figure, FigureCaption, FigureImage } from 'kalki-ui';
import { sampleDog3 } from '@/assets/samples';
export const FigurePreviews = {
  basic: (
    <Figure className="max-w-[120px]">
      <FigureImage src={sampleDog3} alt="Figure" className="rounded object-cover" />
      <FigureCaption>Caption text</FigureCaption>
    </Figure>
  ),
};
