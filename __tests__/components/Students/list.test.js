import React from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import configureMockStore from 'redux-mock-store';

import { mount, shallow } from 'enzyme';
import history from '~/services/history';
// Cria html 'fake'

// import { addTech } from '~/store/modules/techs/actions';
import Students from '~/pages/Students/index';

// import { store, persistor } from '~/store';

// import INITIAL_STATE from './initialState';

jest.mock('react-redux');
const dispatch = jest.fn();
useDispatch.mockReturnValue(dispatch);

describe('List Students component', () => {
  it('should render students', () => {
    const mockStore = configureMockStore();
    const store = mockStore({
      student: {
        allStudents: [
          {
            altura: 1.7,
            createdAt: '2019-10-20T13:15:10.328Z',
            email: 'gabrielenzo@eu.com',
            id: 2,
            idade: 34,
            name: 'Gabriel Enzo',
            peso: 80.4,
            updatedAt: '2019-11-10T11:18:40.728Z',
          },
        ],
      },
    });

    const wrapper = shallow(
      <Provider store={store}>
        <Router history={history}>
          <Students />
        </Router>
      </Provider>
    );
    console.log(wrapper.debug());

    expect(wrapper).toMatchSnapshot();
  });

  it('should render component', () => {
    useSelector.mockImplementation(cb =>
      cb({
        student: {
          allStudents: [
            {
              altura: 1.7,
              createdAt: '2019-10-20T13:15:10.328Z',
              email: 'gabrielenzo@eu.com',
              id: 2,
              idade: 34,
              name: 'Gabriel Enzo',
              peso: 80.4,
              updatedAt: '2019-11-10T11:18:40.728Z',
            },
          ],
        },
      })
    );

    const wrapper = mount(
      <Router history={history}>
        <Students />
      </Router>
    );

    expect(dispatch).toHaveBeenCalledWith({
      type: '@student/LOAD_ALL_STUDENTS_REQUEST',
      payload: { page: 1, search: null },
    });
  });
});
