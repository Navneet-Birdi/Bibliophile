import React from 'react';
import Header from '../components/Header/Header';

import 'semantic-ui-css/semantic.min.css'
import Booklist from '../components/Booklist/Booklist';

const Home = () => {
  return (
    <main>
      <Header/>
     <Booklist/>
    </main>
  )
}

export default Home