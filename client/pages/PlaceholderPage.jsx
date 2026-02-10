import MainLayout from "@/components/MainLayout";

export default function PlaceholderPage({ title, icon }) {
  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-8 text-center border-2 border-gray-100">
          <div className="text-6xl mb-4 animate-bounce">{icon || "📄"}</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-600 mb-6 text-lg">
            This page is under development. Check back soon!
          </p>
          <p className="text-sm text-gray-500">
            Ask me to add features or customize this page content by chatting with me in the editor.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
