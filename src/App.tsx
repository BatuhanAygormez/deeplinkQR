import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const App: React.FC = () => {
  const urls = [
    'https://www.macfit.com/d/member/grupders/22613',
    'https://www.macfit.com/d/member/grupders',
    'https://www.macfit.com/d/member/workout/2442',
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
    'https://www.macfit.com/d/member/programs/2552',
    'https://www.macfit.com/d/member/trainers',
    'https://www.macfit.com/d/member/trainers/377',
    'https://www.macfit.com/d/member/clubs',
    'https://www.macfit.com/d/member/clubs/35',
    'https://www.macfit.com/d/member/fitstart',
    'https://www.macfit.com/d/member/custom/workouts',
    'https://www.macfit.com/d/member/custom/programs',
    'https://www.macfit.com/d/member/leaderboard',
    'https://www.macfit.com/d/member/fitbot',
    'https://www.macfit.com/d/member/accountprivacy',
    'https://www.macfit.com/d/member/badges',
    'https://www.macfit.com/d/member/workouttab',
    'https://www.macfit.com/d/member/measurements',
    'https://www.macfit.com/d/member/yourprogram',
    'https://www.macfit.com/d/member/gpsworkout',
    'https://www.macfit.com/d/clubrating/17.12.2024/365 ',
    'https://www.macfit.com/d/trainerrating/17.12.2024/365 '
    
  ];

  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);

  const handleUrlClick = (url: string) => {
    setSelectedUrl(url);
  };

  const handleCloseQR = () => {
    setSelectedUrl(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10 px-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">URL</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {urls.map((url, index) => (
                <tr key={index} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span
                      className="text"
                      onClick={() => handleUrlClick(url)}
                    >
                      {url}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <button
                      className="text-sm font-medium text-blue-600 hover:text-blue-900 focus:outline-none"
                      onClick={() => handleUrlClick(url)}
                    >
                      QR Kodu Göster
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedUrl && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg shadow-md max-w-xs md:max-w-md">
            <h2 className="text-lg font-semibold mb-2">QR Kodu</h2>
            <QRCode value={selectedUrl} size={200} />
            <p className="mt-2 text-xs text-gray-600 overflow-hidden" style={{ maxHeight: '6em', lineHeight: '1.5em' }}>
              {selectedUrl}
            </p>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              onClick={handleCloseQR}
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
