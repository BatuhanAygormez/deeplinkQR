import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const App: React.FC = () => {
  const urls = [
    'https://www.macfit.com/d/member/grupders/1846285',
    'https://www.macfit.com/d/member/grupders',
    'https://www.macfit.com/d/member/workout/280',
    'https://www.macfit.com/d/member/workout',
    'https://www.macfit.com/d/member/outdoorgrup',
    'https://www.macfit.com/d/member/grupders/search/text',
    'https://www.macfit.com/d/member/outdoorgrup/search/text',
    'https://www.macfit.com/d/member/workout/search/text',
    'https://www.macfit.com/d/member/search/text',
    'https://www.macfit.com/d/member/profile',
    'https://www.macfit.com/d/member/gettoknowbetter',
    'https://www.macfit.com/d/member/favorite',
    'https://www.macfit.com/d/member/favorite/dailytraining',
    'https://www.macfit.com/d/member/favorite/programs',
    'https://www.macfit.com/d/member/programs',
    'https://www.macfit.com/d/member/programs/280',
    'https://www.macfit.com/d/member/trainers',
    'https://www.macfit.com/d/member/trainers/1116',
    'https://www.macfit.com/d/member/clubs',
    'https://www.macfit.com/d/member/clubs/35',
    'https://www.macfit.com/d/member/fitstart',
    'https://www.macfit.com/d/member/profile/clubinvite',
    'https://www.macfit.com/d/member/custom/workouts',
    'https://www.macfit.com/d/member/custom/programs',
    'https://www.macfit.com/d/member/leaderboard',
    'https://www.macfit.com/d/member/fitbot',
    'https://www.macfit.com/d/member/accountprivacy',
    'https://www.macfit.com/d/member/badges',
    'https://www.macfit.com/d/member/workouttab',
    'https://www.macfit.com/d/member/measurements',
    'https://www.macfit.com/d/member/yourprogram'
  ];

  const [selectedUrl, setSelectedUrl] = useState('');

  return (
    <div className="bg-gray-100 flex flex-row items-center py-10">
      <div className="bg-white shadow-md rounded-lg">
        <table className="divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">URL</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {urls.map((url, index) => (
              <tr key={index} className="hover:bg-gray-100 cursor-pointer" onClick={() => setSelectedUrl(url)}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='ml-10'>
        {selectedUrl && (
          <>
            <span className='font-mono text-xs my-10'>
              {selectedUrl}
            </span>
            <div className="bg-white p-4 rounded-lg shadow-lg">

              <QRCode value={selectedUrl} />
            </div>
          </>

        )}
      </div>
    </div>
  );
};

export default App;
