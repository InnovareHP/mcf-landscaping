export default function ImageGallery() {
  return (
    <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Placeholder 1 */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-200 flex items-center justify-center">
        <span className="text-gray-400 text-sm">Image Placeholder</span>
      </div>

      {/* Placeholder 2 */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-200 flex items-center justify-center">
        <span className="text-gray-400 text-sm">Image Placeholder</span>
      </div>

      {/* Placeholder 3 */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-200 flex items-center justify-center">
        <span className="text-gray-400 text-sm">Image Placeholder</span>
      </div>
    </div>
  );
}

