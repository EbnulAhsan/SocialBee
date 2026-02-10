import { Link } from "react-router-dom";

const suggestions = [
  {
    id: 1,
    name: "Groups",
    subtitle: "Find Your Community",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    type: "group",
  },
];

const contacts = [
  { id: 1, name: "Alexander Smith", color: "from-blue-400 to-blue-600" },
  { id: 2, name: "Olivia Johnson", color: "from-purple-400 to-purple-600" },
  { id: 3, name: "Benjamin Williams", color: "from-pink-400 to-pink-600" },
  { id: 4, name: "Emily Brown", color: "from-green-400 to-green-600" },
  { id: 5, name: "Liam Davis", color: "from-red-400 to-red-600" },
  { id: 6, name: "Sophia Martinez", color: "from-yellow-400 to-yellow-600" },
  { id: 7, name: "Noah Wilson", color: "from-indigo-400 to-indigo-600" },
  { id: 8, name: "William Taylor", color: "from-cyan-400 to-cyan-600" },
  { id: 9, name: "Jacob Harris", color: "from-violet-400 to-violet-600" },
];

export default function RightSidebar() {
  return (
    <div className="w-80 bg-white h-[calc(100vh-60px)] overflow-y-auto sticky top-16 shadow-sm">
      {/* Groups Section */}
      <div className="p-4 border-b-2 border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">Groups</h2>
          <Link to="/groups" className="text-blue-600 text-sm font-semibold hover:text-blue-700 transition">
            See All
          </Link>
        </div>

        <div className="space-y-3">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer transform hover:scale-105"
            >
              <img
                src={suggestion.image}
                alt={suggestion.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h3 className="font-bold text-gray-900 text-sm">{suggestion.name}</h3>
                <p className="text-xs text-gray-600">{suggestion.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contacts Section */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Contacts</h2>

        <div className="space-y-2">
          {contacts.map((contact) => (
            <Link
              key={contact.id}
              to={`/profile/${contact.id}`}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition transform hover:translate-x-1"
            >
              <div
                className={`w-10 h-10 rounded-full flex-shrink-0 bg-gradient-to-br ${contact.color} shadow-md`}
              ></div>
              <span className="text-sm text-gray-900 truncate font-semibold">
                {contact.name}
              </span>
              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 ml-auto"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
