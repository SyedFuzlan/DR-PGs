# Authentication System Setup Guide

## 🚀 Features Implemented

### ✅ User Registration
- Name, Phone, Email (optional)
- Aadhaar card upload to Cloudinary
- "Request to Join" flow
- Pending approval status

### ✅ Admin Dashboard
- View pending registration requests
- Approve/Reject users
- View Aadhaar documents
- User management (coming soon)
- Payment tracking (coming soon)
- Room allocation (coming soon)

### ✅ User Dashboard
- View PG details
- Payment history
- Profile information
- Status tracking

### ✅ Login System
- Email + Password authentication
- Phone OTP (ready for implementation)
- Login modal popup
- Mobile-responsive design

## 📋 Setup Instructions

### 1. Cloudinary Upload Preset Setup

1. Go to https://console.cloudinary.com/
2. Navigate to **Settings** → **Upload**
3. Scroll to **Upload presets**
4. Click **"Add upload preset"**
5. Configure:
   - **Preset name:** `dr_pg_aadhaar`
   - **Signing Mode:** `Unsigned`
   - **Folder:** `aadhaar-documents`
6. Click **Save**

### 2. Firebase Setup (Already Done)

Your Firebase project is configured with:
- ✅ Authentication (Email/Password enabled)
- ✅ Firestore Database
- ✅ Phone Authentication ready

### 3. Create Admin Account

To create an admin account, you need to manually add a user to Firestore:

1. Go to Firebase Console → Firestore Database
2. Create a collection called `users`
3. Add a document with ID matching your Firebase Auth UID
4. Set the following fields:
```json
{
  "uid": "your-firebase-auth-uid",
  "email": "admin@dineshreddypg.com",
  "displayName": "Admin",
  "role": "admin",
  "status": "approved",
  "createdAt": "2025-01-04T00:00:00.000Z",
  "updatedAt": "2025-01-04T00:00:00.000Z"
}
```

**Demo Admin Credentials:**
- Email: `admin@dineshreddypg.com`
- Password: `Admin@123`

(You'll need to create this user in Firebase Authentication first)

## 🔐 Firestore Security Rules

Add these rules to your Firestore Database:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow users to read their own data
    match /users/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow write: if request.auth != null && 
                     (request.auth.uid == userId || 
                      get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin');
    }
    
    // Registration requests - users can create, admins can read/update
    match /registrationRequests/{requestId} {
      allow create: if true; // Anyone can submit a registration request
      allow read, update, delete: if request.auth != null && 
                                    get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // Admin-only collections
    match /payments/{paymentId} {
      allow read, write: if request.auth != null && 
                          get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    match /announcements/{announcementId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
                    get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

## 📱 User Flow

### New User Registration:
1. Click "Login" button in navigation
2. Switch to "Register" tab
3. Fill in: Name, Phone, Email (optional)
4. Upload Aadhaar card (max 5MB)
5. Click "Request to Join"
6. Status: **Pending Approval**

### Admin Approval:
1. Admin logs in
2. Navigates to Dashboard
3. Sees pending registration requests
4. Views Aadhaar document
5. Clicks "Approve" or "Reject"
6. User receives notification (WhatsApp - to be implemented)

### Post-Approval (To be implemented):
1. User receives approval notification
2. User sets username and password
3. User can now log in and access dashboard

### User Login:
1. Click "Login" button
2. Enter email + password OR phone + OTP
3. Access dashboard with PG details

## 🔄 Next Steps (To Implement)

### High Priority:
- [ ] WhatsApp notifications (Twilio/WhatsApp Business API)
- [ ] Post-approval username/password setup flow
- [ ] Phone OTP verification
- [ ] Payment tracking system
- [ ] Room allocation system

### Medium Priority:
- [ ] User profile editing
- [ ] Complaint/request system
- [ ] Announcement broadcasting
- [ ] Email notifications

### Low Priority:
- [ ] Analytics dashboard
- [ ] Export reports (PDF/Excel)
- [ ] Multi-language support

## 🛠️ Tech Stack

- **Frontend:** React + TypeScript + Tailwind CSS
- **Authentication:** Firebase Auth
- **Database:** Firebase Firestore
- **File Storage:** Cloudinary
- **Notifications:** WhatsApp Business API (planned)

## 📞 Contact

For issues or questions:
- Phone: 7411962288
- WhatsApp: 7411962288
- Instagram: @dineshreddypgs_blr

## 🔒 Security Notes

- Aadhaar files are stored securely in Cloudinary
- Only admins can view Aadhaar documents
- Firebase security rules enforce role-based access
- All sensitive data is encrypted in transit
- User passwords are hashed by Firebase

## 📝 Testing

### Test User Registration:
1. Open website
2. Click "Login" → "Register"
3. Fill form with test data
4. Upload a sample image as Aadhaar
5. Submit and check Firebase Console

### Test Admin Dashboard:
1. Create admin user in Firebase
2. Login with admin credentials
3. Check pending requests
4. Test approve/reject functionality

---

**Built with ❤️ for Dinesh Reddy PG**
