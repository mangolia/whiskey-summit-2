import ImageUpload from '@/components/ImageUpload';

export default function AdminPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Image Management</h1>
      <div className="max-w-md mx-auto">
        <ImageUpload />
      </div>
    </div>
  );
} 