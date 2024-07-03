'use client';

import "./globals.css";
import Sidebar from "./sidebar/Sidebar";
import Head from "next/head"
import { usePathname } from "next/navigation";
import { Provider } from 'react-redux';
import store from './store';


const Layout = ({ children }) => {
  const pathname = usePathname();
  const isLoginPage = pathname ==='/login';

  return (
    <>
    <Head>
      <title>Budget App</title>
    </Head>
    <html lang="en">
      <body>
        <div className="container">
          <Provider store={store}>
            {!isLoginPage && <Sidebar />}
            <main className={isLoginPage ? 'login-content' : 'main-content'}>
              {children}
            </main>
          </Provider>
        </div>
      </body>
    </html>
    
    </>
    
    
  );
};

export default Layout