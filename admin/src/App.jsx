function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Tailwind CSS Test
      </h1>
      <div className="w-24 h-24 bg-red-500 border-4 border-blue-600 rounded-lg shadow-lg flex items-center justify-center text-white font-semibold">
        Box
      </div>
      <p className="mt-6 text-gray-700">
        If you see a <span className="text-red-500">red box</span> with a{' '}
        <span className="text-blue-600">blue border</span>, Tailwind is working! 🎉
      </p>
    </div>
  );
}

export default App;
