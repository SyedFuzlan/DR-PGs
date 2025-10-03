import { pgLocations } from '../data/pgData';

interface PGsPageProps {
  onNavigate: (page: string) => void;
}

export default function PGsPage({ onNavigate }: PGsPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0a1d38] mb-4">Our PGs</h1>
          <p className="text-lg text-gray-600">Find your perfect living space with our premium PG accommodations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pgLocations.map((pg) => (
            <div key={pg.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-56 overflow-hidden">
                <img 
                  src={pg.cardImage} 
                  alt={pg.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-[#0a1d38]">{pg.name}</h2>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {pg.type === 'mens' ? "Men's PG" : 'Coliving'}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  {pg.area}
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">{pg.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-[#0a1d38]">₹{pg.startingPrice}/month</span>
                  <button 
                    onClick={() => onNavigate(`pg/${pg.slug}`)}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#1f8fff] rounded-lg hover:bg-[#0a6fc2] focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
