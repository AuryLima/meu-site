import Nullstack from 'nullstack'

import './Application.css'
import Home from './Home'

class Application extends Nullstack {

prepare({ page }) {
    page.locale = 'pt-BR'
    page.title = 'Aury Abreu | Desenvolvedor Full Stack'
  }

  renderHead() {
    return (
      <head>
        <link rel="icon" href="/favicon.ico" />

        <link href="https://fonts.gstatic.com" rel="preconnect" />

        <link href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap" rel="stylesheet" />
      </head>
    )
  }

  render() {
    return (
      <body>
        <Head />
        <Home route="/" greeting="Nulla-chan te dá as boas vindas!" />
      </body>
    )
  }

}

export default Application
