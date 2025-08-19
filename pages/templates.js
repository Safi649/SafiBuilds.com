// 📁 pages/templates.js
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Templates() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Templates"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTemplates(data);
      } catch (error) {
        console.error("Error fetching templates: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTemplates();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold text-gray-600">Loading Templates...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-10">Website Templates</h1>

      {templates.length === 0 ? (
        <p className="text-center text-gray-500">No templates found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4"
            >
              <img
                src={template.thumbnailUrl}
                alt={template.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h2 className="text-xl font-semibold mb-2">{template.name}</h2>
              <p className="text-gray-600 mb-4">
                Industry: <span className="font-medium">{template.industry}</span>
              </p>
              <a
                href={template.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Preview
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
