import { Link } from 'react-router-dom'
import { Home, User, LogIn } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🔥</span>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              UniRoast
            </span>
          </Link>
          
          {/* 导航链接 */}
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-purple-600">
              <Home size={20} />
              <span>首页</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-1 text-gray-700 hover:text-purple-600">
              <User size={20} />
              <span>我的</span>
            </Link>
            <Link to="/login" className="flex items-center space-x-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              <LogIn size={20} />
              <span>登录</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}