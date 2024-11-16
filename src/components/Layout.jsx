import NavBar from './NavBar'
import Footer from './Footer';
//import pages from 'global';

// First we create our page dispay options as a dictionary 
const pages = [
  { name: 'Home', key: 'home' },
  { name: 'About', key: 'about' },
  { name: 'Contact', key: 'contact' },
]

// The layout component is expecting children, selectedPage and onSetPage as it's inputs from whatever is calling it
const Layout = ({ children, selectedPage, onSetPage }) => {

  // TODO: what's stored in children, selectedPage, and onSetPage?
  // Children = The JSX code insider the body of whatever is calling the Layout component. In this case it is the following from App.jsx:

  /*
  {page === 'home' && <HomePage />}
  {page === 'about' && <AboutPage />}
  {page === 'contact' && <ContactPage />}
  */

  // selectedPage is the useState variable from the parent. In this case it is  a string usually of value: home, about, contact

  // onSetPage is a useState update function (belonging to the parent) to allow the page state to update throughout the app

  const renderPageLinks = () => {
        
    // TODO: What does this function do?
    // This function generates the custom HTML using the relevan selected page's HTML
    return pages.map(page => (
       <li
          key={page.key}
          style={{
            ...styles.sidebarLink,
            ...(page.key === selectedPage ? styles.selected : {}),
          }}
          onClick={() => onSetPage(page.key)}
        >
          {page.name}
        </li>
    ));
  }


  return (
    <div style={styles.container}>
      {/* Navigation */}
      <NavBar />

      <div style={styles.main}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <ul>
           {renderPageLinks()}
          </ul>
        </aside>

        {/* Content Area */}
        <section style={styles.content}>
          {children}
        </section>
      </div>

      {/* Footer */}
      <Footer />
     
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    minWidth: '100vw',
  },
  selected: {
    backgroundColor: '#999',
  },
  main: {
    display: 'flex',
    flex: 1,
  },
  sidebar: {
    width: '200px',
    backgroundColor: '#f4f4f4',
    padding: '5px',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
  },
  sidebarLink: {
    display: 'block',
    padding: '5px',
    color: '#333',
    textDecoration: 'none',
  },
};

export default Layout;
