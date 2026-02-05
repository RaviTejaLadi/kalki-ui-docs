import Separator from '@/components/common/Separator';

export const SeparatorPreviews = {
  basic: (
    <div className="w-full space-y-2">
      <div className="text-sm text-muted-foreground">Above</div>
      <Separator orientation="horizontal" />
      <div className="text-sm text-muted-foreground">Below</div>
      <div className="flex h-8 items-center gap-2">
        <span className="text-sm">Left</span>
        <Separator orientation="vertical" className="h-4" />
        <span className="text-sm">Right</span>
      </div>
    </div>
  ),
};
