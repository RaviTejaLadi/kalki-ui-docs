import { Splitter, SplitterPane } from 'kalki-ui';
export const SplitterPreviews = {
  basic: (
    <Splitter orientation="horizontal" height="80px" withHandle>
      <SplitterPane initialSize="50%">Left</SplitterPane>
      <SplitterPane initialSize="50%">Right</SplitterPane>
    </Splitter>
  ),
};
