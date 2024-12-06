import { Route, Routes } from 'react-router-dom';
import ComponentsLayout from '../../Layout/ComponentsLayout/ComponentsLayout';
// import ButtonPage from './Buttons/ButtonPage';
import ComponentsOverviewPage from './ComponentsOverviewPage';
import { ButtonsPreview, ButtonPage, LinkButtonPage, LinkBarPage, CloseButtonPage } from './Buttons';
const Components = () => {
  return (
    <div>
      <Routes>
        <Route element={<ComponentsLayout />}>
          <Route index element={<ComponentsOverviewPage />} />
          <Route path="buttons-preview" element={<ButtonsPreview />} />
          <Route path="button" element={<ButtonPage />} />
          <Route path="link-button" element={<LinkButtonPage />} />
          <Route path="linkbar" element={<LinkBarPage />} />
          <Route path="close-button" element={<CloseButtonPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Components;
