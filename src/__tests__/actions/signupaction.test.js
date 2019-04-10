import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { signupAction, signinAction, signOutUser } from '../../actions/authAction';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({ posts: {} });

const mockUser = {
  email: 'monkey@gorilla.com',
  password: 'animal',
};

const mockHistory = {
  replace: jest.fn(),
};
describe('User actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should dispatch signup success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          token: 'kingsley',
          user: {
            userid: 45,
            firstname: 'Kingsley',
          },
        },
      });
    });

    const expectedActions = {
      type: 'SET_CURRENT_USER',
      payload: {
        userid: 45,
        firstname: 'Kingsley',
      },
    };

    return store.dispatch(signupAction(mockUser, mockHistory)).then(() => {
      expect(store.getActions()[1]).toEqual(expectedActions);
    });
  });

  it('should dispatch sign up failure', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          message: 'Invalid Email or Password',
        },
      });
    });

    const expectedActions = { type: 'SET_ERROR_MSG', payload: 'Invalid Email or Password' };

    return store.dispatch(signinAction(mockUser, mockHistory)).then(() => {
      expect(store.getActions()[3]).toEqual(expectedActions);
    });
  });

  it('should dispatch signin success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          token: 'kingsley',
          user: {
            userid: 45,
            firstname: 'Kingsley',
          },
        },
      });
    });

    const expectedActions = {
      type: 'SET_CURRENT_USER',
      payload: {
        userid: 45,
        firstname: 'Kingsley',
      },
    };

    return store.dispatch(signinAction(mockUser, mockHistory)).then(() => {
      expect(store.getActions()[1]).toEqual(expectedActions);
    });
  });

  it('should dispatch sign in failure', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          message: 'Invalid Email or Password',
        },
      });
    });

    const expectedActions = { type: 'SET_ERROR_MSG', payload: 'Invalid Email or Password' };

    return store.dispatch(signupAction(mockUser, mockHistory)).then(() => {
      expect(store.getActions()[3]).toEqual(expectedActions);
    });
  });

  it('should dispatch sign out user', () => {
    store.dispatch(signOutUser());
    expect(store.getActions()[8]).toEqual({ type: 'SIGN_OUT_USER' });
  });
});
