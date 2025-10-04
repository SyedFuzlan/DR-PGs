import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from '../contexts/AuthContext';
import { RegistrationRequest } from '../types/auth';
import { CheckCircle, XCircle, Eye, Trash2, Users, Clock, UserCheck, UserX } from 'lucide-react';

export default function AdminDashboard() {
  const [requests, setRequests] = useState<RegistrationRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState<RegistrationRequest | null>(null);
  const { userProfile } = useAuth();

  useEffect(() => {
    fetchRequests();
  }, []);

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
      
      // TODO: Send WhatsApp notification
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
      
      // TODO: Send WhatsApp notification
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

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0a1d38] mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage user registration requests and approvals</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Pending</p>
                <p className="text-3xl font-bold text-orange-500">{requests.length}</p>
              </div>
              <Clock className="text-orange-500" size={40} />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Users</p>
                <p className="text-3xl font-bold text-blue-500">0</p>
              </div>
              <Users className="text-blue-500" size={40} />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Approved</p>
                <p className="text-3xl font-bold text-green-500">0</p>
              </div>
              <UserCheck className="text-green-500" size={40} />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Rejected</p>
                <p className="text-3xl font-bold text-red-500">0</p>
              </div>
              <UserX className="text-red-500" size={40} />
            </div>
          </div>
        </div>

        {/* Requests Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold text-[#0a1d38]">Pending Registration Requests</h2>
          </div>
          
          {loading ? (
            <div className="p-8 text-center text-gray-500">Loading...</div>
          ) : requests.length === 0 ? (
            <div className="p-8 text-center text-gray-500">No pending requests</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {requests.map((request) => (
                    <tr key={request.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{request.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{request.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{request.email || 'N/A'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {request.createdAt.toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setSelectedRequest(request)}
                            className="text-blue-600 hover:text-blue-900"
                            title="View Details"
                          >
                            <Eye size={18} />
                          </button>
                          <button
                            onClick={() => handleApprove(request.id)}
                            className="text-green-600 hover:text-green-900"
                            title="Approve"
                          >
                            <CheckCircle size={18} />
                          </button>
                          <button
                            onClick={() => handleReject(request.id)}
                            className="text-red-600 hover:text-red-900"
                            title="Reject"
                          >
                            <XCircle size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(request.id)}
                            className="text-gray-600 hover:text-gray-900"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Detail Modal */}
        {selectedRequest && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full p-6">
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
    </div>
  );
}
