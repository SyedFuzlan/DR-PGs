export const cloudinaryConfig = {
  cloudName: 'dsokcrfgn',
  uploadPreset: 'dr_pg_aadhaar', // You'll create this in Cloudinary dashboard
  folder: 'aadhaar-documents'
};

export const uploadToCloudinary = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', cloudinaryConfig.uploadPreset);
  formData.append('folder', cloudinaryConfig.folder);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error.message);
    }

    return data.secure_url;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
};
