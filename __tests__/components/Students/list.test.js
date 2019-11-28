import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Router } from 'react-router-dom';

import { render, fireEvent, cleanup } from '@testing-library/react';
import history from '~/services/history';
// Cria html 'fake'

// import { addTech } from '~/store/modules/techs/actions';
import Students from '~/pages/Students/index';

jest.mock('react-redux');

describe('List Students component', () => {
  it('should render students', () => {
    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    // useSelector.mockImplementation(cb =>
    //   cb({
    //     student: {
    //       allStudents: [
    //         {
    //           altura: 1.7,
    //           createdAt: '2019-10-20T13:15:10.328Z',
    //           email: 'gabrielenzo@eu.com',
    //           id: 2,
    //           idade: 34,
    //           name: 'Gabriel Enzo',
    //           peso: 80.4,
    //           updatedAt: '2019-11-10T11:18:40.728Z',
    //         },
    //         {
    //           altura: 1.5,
    //           createdAt: '2019-11-09T20:14:43.240Z',
    //           email: 'joao@edu.com',
    //           id: 8,
    //           idade: 18,
    //           name: 'João Medial',
    //           peso: 70,
    //           updatedAt: '2019-11-10T11:19:12.942Z',
    //         },
    //         {
    //           altura: 1.8,
    //           createdAt: '2019-11-09T20:14:28.054Z',
    //           email: 'vitor@vitor.com',
    //           id: 7,
    //           idade: 14,
    //           name: 'Vitor Hu Go',
    //           peso: 60,
    //           updatedAt: '2019-11-10T11:19:42.103Z',
    //         },
    //       ],
    //     },
    //   })
    // );

    const { getByText, getByTestId, debug } = render(
      <Router history={history}>
        <Students />
      </Router>
    );

    debug();

    expect(dispatch).toHaveBeenCalledWith({
      type: '@student/LOAD_ALL_STUDENTS_REQUEST',
      payload: { page: 1, search: null },
    });
  });
});
