import Splitter from '@/components/common/Splitter';

export const SplitterPreviews = {
  basic: (
    <Splitter orientation="horizontal" height="80px" withHandle>
      <Splitter.Pane initialSize="50%">Left</Splitter.Pane>
      <Splitter.Pane initialSize="50%">Right</Splitter.Pane>
    </Splitter>
  ),
};
