import { Heart, MessageCircle, Share2, MoreHorizontal, Send } from "lucide-react";
import { useState } from "react";

const stories = [
  { id: 1, username: "John Snow", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=250&fit=crop" },
  { id: 2, username: "Pizza Night", image: "https://images.unsplash.com/photo-1565042666747-61f6fc0038d4?w=150&h=250&fit=crop" },
  { id: 3, username: "Space Travel", image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=150&h=250&fit=crop" },
  { id: 4, username: "Gaming", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=250&fit=crop" },
  { id: 5, username: "Cozy Vibes", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=250&fit=crop" },
];

const initialPosts = [
  {
    id: 1,
    author: "John Snow",
    timestamp: "2 mins ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop",
    content: "Just finished an amazing winter project! So proud of the outcome 🎉",
    image: "https://images.unsplash.com/photo-1515462277046-cf34efcd3237?w=500&h=400&fit=crop",
    likes: 1250,
    comments: 89,
    shares: 34,
  },
  {
    id: 2,
    author: "Emma Wilson",
    timestamp: "4 hours ago",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
    content: "Just finished an amazing project with the team! So proud of what we accomplished 🎉💪",
    image: null,
    likes: 856,
    comments: 42,
    shares: 23,
  },
  {
    id: 3,
    author: "Alex Thompson",
    timestamp: "1 day ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
    content: "Loving this beautiful sunset! Nature is amazing 🌅✨",
    image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=500&h=400&fit=crop",
    likes: 2341,
    comments: 156,
    shares: 89,
  },
];

export default function Feed() {
  const [likedPosts, setLikedPosts] = useState([]);
  const [postContent, setPostContent] = useState("");
  const [posts, setPosts] = useState(initialPosts);

  const toggleLike = (postId) => {
    setLikedPosts((prev) =>
      prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]
    );
  };

  const handlePost = () => {
    if (postContent.trim() === "") return;

    const newPost = {
      id: posts.length + 1,
      author: "Minsara Vithanage",
      timestamp: "now",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop",
      content: postContent,
      image: null,
      likes: 0,
      comments: 0,
      shares: 0,
    };

    setPosts([newPost, ...posts]);
    setPostContent("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handlePost();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-2 sm:px-4 py-2 sm:py-4">
      {/* Stories */}
      <div className="bg-white rounded-xl shadow-md p-2 sm:p-4 mb-4 overflow-x-auto border-2 border-gray-100">
        <div className="flex gap-2 sm:gap-3 pb-2">
          {/* Create Story Button */}
          <div className="flex-shrink-0 w-24 sm:w-32 h-32 sm:h-48 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl border-3 border-dashed border-blue-300 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-100 transition shadow-md hover:shadow-lg transform hover:scale-105">
            <div className="w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-1 sm:mb-2 shadow-md">
              <span className="text-white text-lg sm:text-2xl font-bold">+</span>
            </div>
            <span className="text-xs sm:text-sm font-bold text-blue-600 text-center px-1">Create</span>
          </div>

          {/* Stories */}
          {stories.map((story) => (
            <div
              key={story.id}
              className="flex-shrink-0 w-24 sm:w-32 h-32 sm:h-48 bg-cover bg-center rounded-xl cursor-pointer relative overflow-hidden hover:shadow-xl transition shadow-md transform hover:scale-105 border-2 border-gray-200"
              style={{ backgroundImage: `url(${story.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full border-2 border-white mb-1 shadow-md"></div>
                <p className="text-white text-xs font-bold truncate drop-shadow-md">{story.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Post */}
      <div className="bg-white rounded-xl shadow-md p-2 sm:p-4 mb-4 border-2 border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex-shrink-0 shadow-md"></div>
          <input
            type="text"
            placeholder="What's on your mind?"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 bg-gray-100 rounded-full px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <hr className="border-gray-200 mb-3" />

        <div className="flex items-center justify-between text-gray-600 flex-wrap gap-2">
          <div className="flex gap-2">
            <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 hover:bg-blue-50 rounded-lg transition font-semibold text-xs sm:text-sm whitespace-nowrap hover:text-blue-600 transform hover:scale-105">
              <span className="text-xl sm:text-2xl">🎥</span>
              <span className="hidden sm:inline">Live Video</span>
            </button>
            <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 hover:bg-green-50 rounded-lg transition font-semibold text-xs sm:text-sm whitespace-nowrap hover:text-green-600 transform hover:scale-105">
              <span className="text-xl sm:text-2xl">📷</span>
              <span className="hidden sm:inline">Photo/video</span>
            </button>
            <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 hover:bg-yellow-50 rounded-lg transition font-semibold text-xs sm:text-sm whitespace-nowrap hover:text-yellow-600 transform hover:scale-105">
              <span className="text-xl sm:text-2xl">😊</span>
              <span className="hidden sm:inline">Feeling/activity</span>
            </button>
          </div>

          {/* Post Button */}
          <button
            onClick={handlePost}
            disabled={postContent.trim() === ""}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-lg font-bold text-sm transition transform hover:scale-105 ${
              postContent.trim() === ""
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 shadow-md hover:shadow-lg"
            }`}
          >
            <Send size={18} />
            <span className="hidden sm:inline">Post</span>
          </button>
        </div>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-xl shadow-md mb-4 overflow-hidden border-2 border-gray-100 hover:shadow-lg transition">
          {/* Post Header */}
          <div className="flex items-center justify-between p-2 sm:p-4 bg-gradient-to-r from-gray-50 to-white">
            <div className="flex items-center gap-3 min-w-0">
              <img
                src={post.avatar}
                alt={post.author}
                className="w-8 sm:w-10 h-8 sm:h-10 rounded-full object-cover flex-shrink-0 border-2 border-blue-300"
              />
              <div className="min-w-0">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base truncate">{post.author}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{post.timestamp}</p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-200 rounded-full transition text-gray-600 flex-shrink-0 hover:text-blue-600 transform hover:rotate-90">
              <MoreHorizontal size={20} />
            </button>
          </div>

          {/* Post Content */}
          <div className="px-2 sm:px-4 py-2">
            <p className="text-gray-900 text-sm sm:text-base leading-relaxed">{post.content}</p>
          </div>

          {/* Post Image */}
          {post.image && (
            <img src={post.image} alt="Post" className="w-full h-auto object-cover" />
          )}

          {/* Post Stats */}
          <div className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-600 flex items-center justify-between border-t-2 border-gray-100 bg-gradient-to-r from-gray-50 to-white">
            <span className="font-semibold">❤️ {post.likes.toLocaleString()}</span>
            <div className="space-x-2 sm:space-x-4">
              <span>💬 {post.comments}</span>
              <span className="hidden sm:inline">↗️ {post.shares}</span>
            </div>
          </div>

          {/* Post Actions */}
          <div className="px-2 sm:px-4 py-2 flex items-center justify-around border-t-2 border-gray-100 gap-1 bg-gray-50">
            <button
              onClick={() => toggleLike(post.id)}
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg transition font-bold text-xs sm:text-sm flex-1 justify-center transform hover:scale-105 ${
                likedPosts.includes(post.id)
                  ? "text-red-600 bg-red-100 hover:bg-red-200"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Heart
                size={16}
                className="sm:w-5 sm:h-5"
                fill={likedPosts.includes(post.id) ? "currentColor" : "none"}
              />
              <span className="hidden sm:inline">Like</span>
            </button>
            <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 hover:bg-gray-200 rounded-lg transition font-bold text-xs sm:text-sm text-gray-700 flex-1 justify-center transform hover:scale-105">
              <MessageCircle size={16} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Comment</span>
            </button>
            <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 hover:bg-gray-200 rounded-lg transition font-bold text-xs sm:text-sm text-gray-700 flex-1 justify-center transform hover:scale-105">
              <Share2 size={16} className="sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
