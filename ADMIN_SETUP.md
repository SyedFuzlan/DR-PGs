# Admin Account Setup Guide

## ⚠️ Important: You're getting `auth/invalid-credential` error because the admin account doesn't exist yet!

Follow these steps **exactly** to create your admin account:

## Step 1: Create Admin User in Firebase Authentication

1. Go to: https://console.firebase.google.com/project/dinesh-reddy-pg/authentication/users
2. Click **"Add user"** button
3. Enter:
   - **Email:** `admin@dineshreddypg.com`
   - **Password:** `Admin@123`
4. Click **"Add user"**
5. **COPY THE UID** (it looks like: `abc123xyz456...`)

## Step 2: Create Admin Profile in Firestore

1. Go to: https://console.firebase.google.com/project/dinesh-reddy-pg/firestore/data
2. Click **"Start collection"**
3. Collection ID: `users`
4. Click **"Next"**
5. Document ID: **Paste the UID you copied** (from Step 1)
6. Add these fields:

| Field Name | Type | Value |
|------------|------|-------|
| uid | string | (paste the UID again) |
| email | string | admin@dineshreddypg.com |
| displayName | string | Admin |
| role | string | admin |
| status | string | approved |
| phone | string | +917411962288 |
| createdAt | timestamp | (click "Set to current time") |
| updatedAt | timestamp | (click "Set to current time") |

7. Click **"Save"**

## Step 3: Test Admin Login

1. Go to your website: https://syedfuzlan.github.io/DR-PGs/
2. Click **"Login"** button (top-right)
3. Enter:
   - **Email:** `admin@dineshreddypg.com`
   - **Password:** `Admin@123`
4. Click **"Login"**
5. You should be redirected to **Admin Dashboard**!

## 🎯 Quick Test Checklist

- [ ] Admin user created in Firebase Authentication
- [ ] Admin profile created in Firestore with `role: "admin"`
- [ ] Can login successfully
- [ ] Redirected to Admin Dashboard
- [ ] Can see pending registration requests

## 🔐 Alternative: Create Admin via Firebase Console

If you prefer a different email/password:

**Email:** `your-email@example.com`  
**Password:** `YourSecurePassword123!`

Just make sure to:
1. Create the user in Firebase Authentication
2. Create matching profile in Firestore with `role: "admin"`
3. Use the **exact same UID** in both places

## 🆘 Troubleshooting

### Error: `auth/invalid-credential`
- **Cause:** User doesn't exist in Firebase Authentication
- **Fix:** Follow Step 1 above

### Error: `Access Denied` after login
- **Cause:** User exists but doesn't have admin role in Firestore
- **Fix:** Follow Step 2 above and ensure `role: "admin"`

### Can't see Dashboard button
- **Cause:** Not logged in or page needs refresh
- **Fix:** Login again and refresh page

---

**Once you complete these steps, your admin account will work perfectly!** 🎉
