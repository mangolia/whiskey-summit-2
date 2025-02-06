'use client';
import { useState } from 'react';

export default function ImageUpload() {
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.[0]) return;
    
    setUploading(true);
    setMessage('');
    
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      setMessage('Upload successful!');
    } catch {
      setMessage('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <label className="block mb-2">
        <span className="text-gray-700">Upload Image</span>
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          disabled={uploading}
          className="block w-full text-sm text-gray-500 mt-1
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-gray-50 file:text-gray-700
            hover:file:bg-gray-100"
        />
      </label>
      {uploading && <p className="text-gray-500">Uploading...</p>}
      {message && <p className={message.includes('successful') ? 'text-green-500' : 'text-red-500'}>{message}</p>}
    </div>
  );
} 