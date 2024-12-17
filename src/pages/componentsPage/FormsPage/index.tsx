import React from 'react';

const CheckBoxCardPage = React.lazy(() => import('./CheckBoxCardPage'));
const CheckboxPage = React.lazy(() => import('./CheckboxPage'));
const DropdownPage = React.lazy(() => import('./DropdownPage'));
const FormsPage = React.lazy(() => import('./FormsPage'));
const InputPage = React.lazy(() => import('./InputPage'));
const RadioCardPage = React.lazy(() => import('./RadioCardPage'));
const RadioPage = React.lazy(() => import('./RadioPage'));
const SelectPage = React.lazy(() => import('./SelectPage'));
const TextareaPage = React.lazy(() => import('./TextareaPage'));

export {
  CheckBoxCardPage,
  CheckboxPage,
  DropdownPage,
  FormsPage,
  InputPage,
  RadioPage,
  RadioCardPage,
  SelectPage,
  TextareaPage,
};
