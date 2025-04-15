import { Outlet } from 'react-router-dom';

const BlocksLayout = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};

export default BlocksLayout;
