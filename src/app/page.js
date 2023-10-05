import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Timeline from './components/Timeline/Timeline'
import Welcome from './components/WelcomePage/WelcomeAnimation'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className='section'>
      <Welcome />
      </section>
      <section style={{
        height: '100vh',
      }}> 
      <About/>
      </section>
      <section className='section'>
        <Timeline/>
        </section>
        <section  className='section'>
          <Projects/>
        </section>
    </main>
  )
}
