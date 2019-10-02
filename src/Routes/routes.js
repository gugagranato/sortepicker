import React from 'react';

import SortePicker from '../Pages/SortePicker'
import Idea from '../Pages/Idea'
import Rentability from '../Pages/Rentability'
import Sugestion from '../Pages/Sugestion'

const routes = {
  '/': () => <SortePicker />,
  '/sortepicker': () => <SortePicker />,
  '/idea': () => <Idea />,
  '/rentability': () => <Rentability />,
  '/sugestion': () => <Sugestion />,
};

export default routes;