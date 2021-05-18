import '../styles/global.scss'

import { Header } from '../components/Header'
import { Player } from '../components/Player';

import { AppProvider } from '../contexts/AppContext';
import styles from '../styles/app.module.scss';
import { PlayerContextProvider } from '../contexts/PlayerContext';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <PlayerContextProvider>
        < div className={styles.wrapper} >
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
          <Player />
        </div >
      </PlayerContextProvider>
    </AppProvider>
  )
}

export default MyApp
