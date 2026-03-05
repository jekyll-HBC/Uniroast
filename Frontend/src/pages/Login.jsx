import { useState } from 'react'

export default function Login() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        {/* 标题 */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            {isLogin ? '欢迎回来' : '加入UniRoast'}
          </h2>
          <p className="text-gray-600">
            {isLogin ? '继续你的吐槽之旅' : '开始你的校园社交'}
          </p>
        </div>

        {/* 表单 */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              用户名
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="输入用户名"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                邮箱
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              密码
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="输入密码"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-bold hover:from-purple-700 hover:to-pink-700 transition"
          >
            {isLogin ? '登录' : '注册'}
          </button>
        </form>

        {/* 切换登录/注册 */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            {isLogin ? '还没有账号？去注册' : '已有账号？去登录'}
          </button>
        </div>
      </div>
    </div>
  )
}