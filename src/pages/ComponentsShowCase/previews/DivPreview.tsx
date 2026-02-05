import Div from '@/components/common/Div';

export const DivPreviews = {
  basic: (
    <div className="flex gap-2 flex-wrap">
      <Div borderStyle="solid" backgroundColor="gray" className="p-3 rounded">Solid</Div>
      <Div borderStyle="dashed" backgroundColor="blue" className="p-3 rounded">Dashed</Div>
      <Div borderStyle="dotted" backgroundColor="green" className="p-3 rounded">Dotted</Div>
    </div>
  ),
};
