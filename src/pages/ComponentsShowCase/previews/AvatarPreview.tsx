import { Avatar, AvatarFallback, AvatarImage } from 'kalki-ui';
import { sampleDog1 } from '@/assets/samples';
export const AvatarPreviews = {
  basic: (
    <div className="flex gap-3 items-center">
      <Avatar size="sm">
        <AvatarImage src={sampleDog1} alt="User" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarImage src={sampleDog1} alt="User" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>XY</AvatarFallback>
      </Avatar>
    </div>
  ),
};
