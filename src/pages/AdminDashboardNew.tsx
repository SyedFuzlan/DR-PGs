import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from '../contexts/AuthContext';
import { RegistrationRequest, PGStats, BillingRecord, UserData } from '../types/auth';
import { 
  Bell, Home, Bed, DollarSign, Users, CheckCircle, XCircle, 
  Eye, Trash2, Filter, Search, Edit, UserX, LogOut 
} from 'lucide-react';

type TabType = 'notifications' | 'overview' | 'beds' | 'billing' | 'users';

export default function AdminDashboardNew() {
  const [activeTab, setActiveTab] = useState<TabType>('notifications');
  const [requests, setRequests] = useState<RegistrationRequest[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<RegistrationRequest | null>(null);
  const [loading, setLoading] = useState(true);
  const { userProfile, signOut } = useAuth();

  // Dummy data for PG Overview
  const pgStats: PGStats[] = [
    { id: '1', name: 'DINESH REDDY LUXURY LIVING PG', totalBeds: 30, occupiedBeds: 25, vacantBeds: 5, location: 'Vajpayee Nagar' },
    { id: '2', name: 'New Dinesh Reddy LUXURY LIVING PG For Gents', totalBeds: 25, occupiedBeds: 20, vacantBeds: 5, location: 'Munisamappa Layout' },
    { id: '3', name: 'Dinesh Reddy CO-Living Luxury PG', totalBeds: 35, occupiedBeds: 30, vacantBeds: 5, location: 'Garvebhavi Palya' },
    { id: '4', name: 'Dinesh Reddy Luxury Comforts', totalBeds: 28, occupiedBeds: 22, vacantBeds: 6, location: 'Chikka Begur Gate' },
  ];

  // Dummy data for Billing
  const billingRecords: BillingRecord[] = [
    { id: '1', userId: 'u1', userName: 'Rajesh Kumar', pgName: 'DINESH REDDY LUXURY LIVING PG', roomType: '3-sharing', amount: 7500, dueDate: new Date('2025-01-05'), status: 'due', month: 'January 2025' },
    { id: '2', userId: 'u2', userName: 'Amit Sharma', pgName: 'New Dinesh Reddy LUXURY LIVING PG', roomType: '2-sharing', amount: 9500, dueDate: new Date('2025-01-03'), paidDate: new Date('2025-01-02'), status: 'paid', month: 'January 2025' },
    { id: '3', userId: 'u3', userName: 'Priya Singh', pgName: 'Dinesh Reddy CO-Living Luxury PG', roomType: 'Single', amount: 20000, dueDate: new Date('2024-12-28'), status: 'delayed', month: 'December 2024' },
    { id: '4', userId: 'u4', userName: 'Vikram Reddy', pgName: 'Dinesh Reddy Luxury Comforts', roomType: '3-sharing', amount: 7000, dueDate: new Date('2025-01-10'), status: 'due', month: 'January 2025' },
  ];

  // Dummy data for Users
  const allUsers: UserData[] = [
    { uid: 'u1', email: 'rajesh@example.com', phone: '+919876543210', displayName: 'Rajesh Kumar', role: 'user', status: 'approved', pgName: 'DINESH REDDY LUXURY LIVING PG', roomNumber: '101', roomType: '3-sharing', rent: 7500, createdAt: new Date('2024-12-01'), updatedAt: new Date('2024-12-01') },
    { uid: 'u2', email: 'amit@example.com', phone: '+919876543211', displayName: 'Amit Sharma', role: 'user', status: 'approved', pgName: 'New Dinesh Reddy LUXURY LIVING PG', roomNumber: '205', roomType: '2-sharing', rent: 9500, createdAt: new Date('2024-11-15'), updatedAt: new Date('2024-11-15') },
    { uid: 'u3', email: 'priya@example.com', phone: '+919876543212', displayName: 'Priya Singh', role: 'user', status: 'approved', pgName: 'Dinesh Reddy CO-Living Luxury PG', roomNumber: '301', roomType: 'Single', rent: 20000, createdAt: new Date('2024-10-20'), updatedAt: new Date('2024-10-20') },
  ];

  useEffect(() => {
    fetchRequests();
  }, []);

  useEffect(() => {
    if (selectedRequest) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedRequest]);

  const fetchRequests = async () => {
    try {
      const q = query(collection(db, 'registrationRequests'), where('status', '==', 'pending'));
      const querySnapshot = await getDocs(q);
      const requestsData: RegistrationRequest[] = [];
      
      querySnapshot.forEach((doc) => {
        requestsData.push({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate() || new Date()
        } as RegistrationRequest);
      });
      
      setRequests(requestsData);
    } catch (error) {
      console.error('Error fetching requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (requestId: string) => {
    try {
      await updateDoc(doc(db, 'registrationRequests', requestId), {
        status: 'approved',
        approvedAt: new Date()
      });
      alert('User approved! They will be notified to complete their registration.');
      fetchRequests();
    } catch (error) {
      console.error('Error approving request:', error);
      alert('Failed to approve request');
    }
  };

  const handleReject = async (requestId: string) => {
    const reason = prompt('Enter rejection reason (optional):');
    try {
      await updateDoc(doc(db, 'registrationRequests', requestId), {
        status: 'rejected',
        rejectedAt: new Date(),
        rejectionReason: reason || 'Not specified'
      });
      alert('User rejected. They will be notified.');
      fetchRequests();
    } catch (error) {
      console.error('Error rejecting request:', error);
      alert('Failed to reject request');
    }
  };

  const handleDelete = async (requestId: string) => {
    if (!confirm('Are you sure you want to delete this request?')) return;
    try {
      await deleteDoc(doc(db, 'registrationRequests', requestId));
      alert('Request deleted successfully');
      fetchRequests();
    } catch (error) {
      console.error('Error deleting request:', error);
      alert('Failed to delete request');
    }
  };

  if (userProfile?.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
          <p className="text-gray-600">You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'notifications', label: 'Notifications', icon: Bell, count: requests.length },
    { id: 'overview', label: 'PG Overview', icon: Home },
    { id: 'beds', label: 'Bed Management', icon: Bed },
    { id: 'billing', label: 'Billing', icon: DollarSign },
    { id: 'users', label: 'Users', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="bg-[#0a1d38] text-white sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <p className="text-sm text-gray-300">Dinesh Reddy PG</p>
          </div>
          <button
            onClick={() => signOut()}
            className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors"
          >
            <LogOut size={18} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>

      {/* Tabbed Navigation */}
      <div className="bg-white border-b sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`flex items-center space-x-2 px-4 py-4 border-b-2 whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'border-[#1f8fff] text-[#1f8fff] bg-blue-50'
                      : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{tab.label}</span>
                  {tab.count !== undefined && tab.count > 0 && (
                    <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <div>
            <h2 className="text-2xl font-bold text-[#0a1d38] mb-6">New User Requests</h2>
            
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1f8fff] mx-auto"></div>
                <p className="text-gray-600 mt-4">Loading requests...</p>
              </div>
            ) : requests.length === 0 ? (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <Bell className="mx-auto text-gray-400 mb-4" size={48} />
                <p className="text-gray-600 text-lg">No pending requests</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {requests.map((request) => (
                  <div key={request.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#0a1d38] mb-2">{request.name}</h3>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p>📱 {request.phone}</p>
                          <p>📧 {request.email || 'Not provided'}</p>
                          <p>📅 {request.createdAt.toLocaleDateString()}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => setSelectedRequest(request)}
                          className="flex items-center space-x-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                          <Eye size={18} />
                          <span>View</span>
                        </button>
                        <button
                          onClick={() => handleApprove(request.id)}
                          className="flex items-center space-x-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                        >
                          <CheckCircle size={18} />
                          <span>Approve</span>
                        </button>
                        <button
                          onClick={() => handleReject(request.id)}
                          className="flex items-center space-x-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                        >
                          <XCircle size={18} />
                          <span>Reject</span>
                        </button>
                        <button
                          onClick={() => handleDelete(request.id)}
                          className="flex items-center space-x-1 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* PG Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-2xl font-bold text-[#0a1d38] mb-6">PG Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pgStats.map((pg) => (
                <div key={pg.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-[#0a1d38] mb-4">{pg.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">📍 {pg.location}</p>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-500">{pg.totalBeds}</p>
                      <p className="text-xs text-gray-600">Total Beds</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-500">{pg.occupiedBeds}</p>
                      <p className="text-xs text-gray-600">Occupied</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-orange-500">{pg.vacantBeds}</p>
                      <p className="text-xs text-gray-600">Vacant</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${(pg.occupiedBeds / pg.totalBeds) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-600 mt-1 text-center">
                      {Math.round((pg.occupiedBeds / pg.totalBeds) * 100)}% Occupancy
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bed Management Tab */}
        {activeTab === 'beds' && (
          <div>
            <h2 className="text-2xl font-bold text-[#0a1d38] mb-6">Bed Management</h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <select className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f8fff] focus:border-transparent text-gray-900 bg-white">
                  <option>All PGs</option>
                  {pgStats.map(pg => <option key={pg.id}>{pg.name}</option>)}
                </select>
                <select className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f8fff] focus:border-transparent text-gray-900 bg-white">
                  <option>All Room Types</option>
                  <option>3-sharing</option>
                  <option>2-sharing</option>
                  <option>Single</option>
                </select>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Room No</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Capacity</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Occupied</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { room: '101', type: '3-sharing', capacity: 3, occupied: 3, status: 'Full' },
                      { room: '102', type: '3-sharing', capacity: 3, occupied: 2, status: 'Available' },
                      { room: '201', type: '2-sharing', capacity: 2, occupied: 2, status: 'Full' },
                      { room: '202', type: '2-sharing', capacity: 2, occupied: 1, status: 'Available' },
                      { room: '301', type: 'Single', capacity: 1, occupied: 1, status: 'Full' },
                      { room: '302', type: 'Single', capacity: 1, occupied: 0, status: 'Vacant' },
                    ].map((bed, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{bed.room}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{bed.type}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{bed.capacity}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{bed.occupied}</td>
                        <td className="px-4 py-3 text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            bed.status === 'Full' ? 'bg-red-100 text-red-800' :
                            bed.status === 'Available' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {bed.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <button className="text-blue-600 hover:text-blue-900">
                            <Edit size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Billing Tab */}
        {activeTab === 'billing' && (
          <div>
            <h2 className="text-2xl font-bold text-[#0a1d38] mb-6">Billing & Payments</h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search by name..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f8fff] focus:border-transparent text-gray-900 bg-white"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-[#1f8fff] text-white rounded-lg hover:bg-[#1a7ae6] transition-colors">
                  <Filter size={18} />
                  <span>Filter</span>
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">PG</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Room</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {billingRecords.map((record) => (
                      <tr key={record.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{record.userName}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 max-w-xs truncate">{record.pgName}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{record.roomType}</td>
                        <td className="px-4 py-3 text-sm font-semibold text-gray-900">₹{record.amount.toLocaleString()}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{record.dueDate.toLocaleDateString()}</td>
                        <td className="px-4 py-3 text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            record.status === 'paid' ? 'bg-green-100 text-green-800' :
                            record.status === 'due' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {record.status.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* User Management Tab */}
        {activeTab === 'users' && (
          <div>
            <h2 className="text-2xl font-bold text-[#0a1d38] mb-6">User Management</h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f8fff] focus:border-transparent text-gray-900 bg-white"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {allUsers.map((user) => (
                  <div key={user.uid} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#0a1d38] mb-2">{user.displayName}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                          <p>📧 {user.email}</p>
                          <p>📱 {user.phone}</p>
                          <p>🏠 {user.pgName}</p>
                          <p>🚪 Room {user.roomNumber} ({user.roomType})</p>
                          <p>💰 ₹{user.rent?.toLocaleString()}/month</p>
                          <p>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              user.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {user.status.toUpperCase()}
                            </span>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="flex items-center space-x-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                          <Edit size={18} />
                          <span>Edit</span>
                        </button>
                        <button className="flex items-center space-x-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                          <UserX size={18} />
                          <span>Deactivate</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedRequest && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedRequest(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-[#0a1d38] mb-4">Request Details</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Name</label>
                <p className="text-lg font-semibold">{selectedRequest.name}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-600">Phone</label>
                <p className="text-lg">{selectedRequest.phone}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-600">Email</label>
                <p className="text-lg">{selectedRequest.email || 'Not provided'}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-600">Aadhaar Document</label>
                <a
                  href={selectedRequest.aadhaarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2"
                >
                  <img
                    src={selectedRequest.aadhaarUrl}
                    alt="Aadhaar"
                    className="max-w-full h-auto rounded-lg border"
                  />
                </a>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-600">Submitted On</label>
                <p className="text-lg">{selectedRequest.createdAt.toLocaleString()}</p>
              </div>
            </div>
            
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => {
                  handleApprove(selectedRequest.id);
                  setSelectedRequest(null);
                }}
                className="flex-1 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600"
              >
                Approve
              </button>
              <button
                onClick={() => {
                  handleReject(selectedRequest.id);
                  setSelectedRequest(null);
                }}
                className="flex-1 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600"
              >
                Reject
              </button>
              <button
                onClick={() => setSelectedRequest(null)}
                className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
