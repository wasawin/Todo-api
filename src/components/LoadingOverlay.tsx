export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white  z-50">
      <div className="text-black text-2xl">Loading...</div>
    </div>
  );
}
