import React from 'react';

import SortePicker from '../Pages/SortePicker'
import Idea from '../Pages/Idea'
import Rentability from '../Pages/Rentability'
import Sugestion from '../Pages/Sugestion'
import TableList from '../Components/TableList';

const routes = {
  '/': () => <SortePicker />,
  '/sortepicker': () => <SortePicker />,
  '/idea': () => <Idea />,
  '/rentability': () => <Rentability />,
  '/sugestion': () => <Sugestion />,
  '/table': () => <TableList />,
};

export default routes;