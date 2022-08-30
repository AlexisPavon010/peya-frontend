import React from 'react'
import ReactDOM from 'react-dom/client'
import 'swiper/css';
import "swiper/css/navigation";

import './index.scss'
import { AppRouter } from './Routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)
