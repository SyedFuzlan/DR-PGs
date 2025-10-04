import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from '../contexts/AuthContext';
import { UserData } from '../types/auth';
import { Home, DollarSign, Calendar, User, Bell, FileText } from 'lucide-react';

export default function UserDashboard() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const { currentUser, userProfile } = useAuth();

  useEffect(() => {
    fetchUserData();
  }, [currentUser]);

  const fetchUserData = async () => {
    if (!currentUser) return;
    
    try {
      const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
      if (userDoc.exists()) {
        setUserData(userDoc.data() as UserData);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1f8fff] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (userProfile?.status === 'pending') {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Bell className="text-yellow-600 mr-3" size={32} />
              <h2 className="text-2xl font-bold text-yellow-800">Approval Pending</h2>
            </div>
            <p className="text-yellow-700 mb-4">
              Your registration request is currently under review by our admin team. 
              You'll receive a notification once your account is approved.
            </p>
            <div className="bg-white p-4 rounded-lg mt-4">
              <h3 className="font-semibold text-gray-800 mb-2">What happens next?</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Admin will review your Aadhaar document</li>
                <li>You'll receive a WhatsApp notification upon approval</li>
                <li>You'll be prompted to set your username and password</li>
                <li>Once complete, you can access your full dashboard</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (userProfile?.status === 'rejected') {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-red-800 mb-4">Application Rejected</h2>
            <p className="text-red-700 mb-4">
              Unfortunately, your registration request was not approved.
            </p>
            <p className="text-gray-600">
              Please contact us at <a href="tel:7411962288" className="text-blue-600 underline">7411962288</a> for more information.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0a1d38] mb-2">
            Welcome, {userProfile?.displayName || 'User'}!
          </h1>
          <p className="text-gray-600">Manage your PG details and payments</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Current Rent</p>
                <p className="text-3xl font-bold text-[#1f8fff]">
                  ₹{userData?.rent?.toLocaleString() || '0'}
                </p>
              </div>
              <DollarSign className="text-[#1f8fff]" size={40} />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Room Number</p>
                <p className="text-3xl font-bold text-green-500">
                  {userData?.roomNumber || 'N/A'}
                </p>
              </div>
              <Home className="text-green-500" size={40} />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Next Due Date</p>
                <p className="text-xl font-bold text-orange-500">
                  {userData?.dueDate ? new Date(userData.dueDate).toLocaleDateString() : 'N/A'}
                </p>
              </div>
              <Calendar className="text-orange-500" size={40} />
            </div>
          </div>
        </div>

        {/* PG Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-[#0a1d38] mb-4 flex items-center">
              <Home className="mr-2" size={24} />
              PG Details
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">PG Name</span>
                <span className="font-semibold">{userData?.pgName || 'Not Assigned'}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Room Type</span>
                <span className="font-semibold">{userData?.roomType || 'N/A'}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Room Number</span>
                <span className="font-semibold">{userData?.roomNumber || 'N/A'}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Join Date</span>
                <span className="font-semibold">
                  {userData?.joinDate ? new Date(userData.joinDate).toLocaleDateString() : 'N/A'}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-[#0a1d38] mb-4 flex items-center">
              <User className="mr-2" size={24} />
              Personal Information
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Name</span>
                <span className="font-semibold">{userProfile?.displayName || 'N/A'}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Email</span>
                <span className="font-semibold">{userProfile?.email || 'N/A'}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Phone</span>
                <span className="font-semibold">{userProfile?.phone || 'N/A'}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Status</span>
                <span className={`font-semibold ${
                  userProfile?.status === 'approved' ? 'text-green-600' : 'text-orange-600'
                }`}>
                  {userProfile?.status?.toUpperCase() || 'N/A'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment History */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-[#0a1d38] mb-4 flex items-center">
            <FileText className="mr-2" size={24} />
            Payment History
          </h2>
          
          {userData?.paymentHistory && userData.paymentHistory.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Month</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {userData.paymentHistory.map((payment) => (
                    <tr key={payment.id}>
                      <td className="px-4 py-3 text-sm">
                        {new Date(payment.date).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3 text-sm">{payment.month}</td>
                      <td className="px-4 py-3 text-sm font-semibold">₹{payment.amount.toLocaleString()}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          payment.status === 'paid' ? 'bg-green-100 text-green-800' :
                          payment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {payment.status.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">No payment history available</p>
          )}
        </div>
      </div>
    </div>
  );
}
