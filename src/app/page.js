import About from './components/About/About'
import Projects from './components/Projects/Projects'
import History from './components/Timeline/Timeline'
import Welcome from './components/WelcomePage/WelcomeAnimation'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className='section'>
      <Welcome />
      </section>
      <section style={{
        marginBottom: '10vh',
      }}> 
      <About/>
      </section>
      <section className='section' style={{
        marginBottom: '10vh',
      }}>
        <History/>
        </section>
        <section  className='section' style={{
        marginTop: '10vh',
        marginBottom: '10vh',
      }}>
          <Projects/>
        </section>
    </main>
  )
}
