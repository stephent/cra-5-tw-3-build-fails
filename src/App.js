import logo from './logo.svg';

// Styling
import './styles/custom.css';

import BuildFail from './components/buildFail/BuildFail';

function App() {
  return (
    <div className="mx-auto text-white">
      <header className="bg-gray-800 min-h-[100vh] flex flex-col items-center justify-center text-xl text-white">
        <div>
          <p>This is a vanilla CRA5 app configured with Tailwind 3.</p>
          <p>The project runs successfully (<code>npm run start</code>)&hellip;</p>
          <p>&hellip; but it fails to build (<code>npm run build</code>):</p>
        </div>
        <BuildFail />

        <div className='mt-4'>
          <p>To fix the build problem, delete <code>bg-white</code> from line 2 of <code>./styles/custom.css</code> and re-run the build command.</p>
        </div>

      </header>
    </div>
  );
}

export default App;
