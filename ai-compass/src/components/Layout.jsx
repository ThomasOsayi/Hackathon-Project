import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div className="animate-gradient flex min-h-screen flex-col bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
    <header className="sticky top-0 z-20 bg-white/10 backdrop-blur-md shadow-lg">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 text-white sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-xl font-bold">
          <span role="img" aria-label="AI infrastructure">
            🏗️
          </span>
          AI Infrastructure Compass
        </div>
        <p className="text-sm text-white/80">Powered by Social Good</p>
      </div>
    </header>

    <main className="flex-1">
      <div className="mx-auto my-8 max-w-6xl px-6">
        <div className="animate-fade-in rounded-2xl bg-white p-8 shadow-card-hover transition-all duration-500 ease-out">
          {children}
        </div>
      </div>
    </main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

