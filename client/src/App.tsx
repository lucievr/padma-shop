import React, { useEffect, lazy, Suspense, FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ApplicationState } from './redux/store';
import { User } from './redux/user/user.types';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession, Dispatch } from './redux/user/user.actions';
import { setWindowDimensions } from './redux/app/app.actions';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import './App.scss';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(
  () => import('./pages/signin-and-signup/signin-and-signup.component')
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const ContactPage = lazy(() => import('./pages/contact/contact.component'));

type AppProps = {
  checkUserSession: () => void;
  currentUser: User | null;
  setWindowDimensions: () => void;
};

const App: FC<AppProps> = ({
  checkUserSession,
  currentUser,
  setWindowDimensions,
}) => {
  const handleResize = () => setWindowDimensions();

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <>
      <Header />
      <ScrollToTop>
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={HomePage} />

              <Route path='/shop' component={ShopPage} />
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route
                exact
                path='/signin'
                render={() =>
                  currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
                }
              />
              <Route exact path='/contact' component={ContactPage} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </ScrollToTop>
      <footer className='footer'>
        <span>© {new Date().getFullYear()} Padma Co.</span>
      </footer>
    </>
  );
};

interface Selection {
  currentUser: User | null;
}

const mapStateToProps = createStructuredSelector<ApplicationState, Selection>({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
  setWindowDimensions: () => dispatch(setWindowDimensions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
