import { Avatar, AvatarFallback, AvatarImage } from 'kalki-ui';
export const AvatarPreviews = {
  basic: (
    <div className="flex gap-3 items-center">
      <Avatar size="sm">
        <AvatarImage src="https://github.com/github.png" alt="User" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarImage src="https://github.com/github.png" alt="User" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>XY</AvatarFallback>
      </Avatar>
    </div>
  ),
};
