import { useHover } from '@/modules/hooks';

const UseHoverExample = () => {
  const {  hovered } = useHover();
  
  return (
    <button
      // ref={ref}
      className={`w-[200px] h-[100px] ${
      hovered ? 'bg-blue-500' : 'bg-gray-500'
      } text-white flex justify-center items-center`}
    >
      {hovered ? 'Hovered!' : 'Hover me!'}
    </button>
  );
};

export default UseHoverExample;
