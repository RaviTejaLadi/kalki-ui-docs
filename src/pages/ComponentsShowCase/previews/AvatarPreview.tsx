import Avatar from '@/components/common/Avatar';

export const AvatarPreviews = {
  basic: (
    <div className="flex gap-3 items-center">
      <Avatar size="sm">
        <Avatar.Image src="https://github.com/github.png" alt="User" />
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>
      <Avatar size="md">
        <Avatar.Image src="https://github.com/github.png" alt="User" />
        <Avatar.Fallback>AB</Avatar.Fallback>
      </Avatar>
      <Avatar size="lg">
        <Avatar.Fallback>XY</Avatar.Fallback>
      </Avatar>
    </div>
  ),
};
