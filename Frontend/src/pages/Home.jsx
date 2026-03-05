import { Trophy, Upload } from 'lucide-react'

export default function Home() {
  // 模拟数据
  const todayTheme = {
    title: "最难以名状的食堂美食",
    emoji: "🍜",
    description: "展示你在食堂吃到的最离谱的饭菜"
  }

  const mockPosts = [
    {
      id: 1,
      username: "张三",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
      image: "https://picsum.photos/400/300?random=1",
      caption: "我觉得这应该是土豆炖牛肉...吧？",
      aiRoast: "这份菜成功证明了食堂阿姨是色盲，因为这个颜色在自然界根本不存在 🤢",
      likes: 42,
      rank: 1
    },
    {
      id: 2,
      username: "李四",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
      image: "https://picsum.photos/400/300?random=2",
      caption: "这是啥我真看不出来",
      aiRoast: "AI已被你的食物送进ICU抢救，建议你也去挂个号 💀",
      likes: 38,
      rank: 2
    }
  ]

  return (
    <div className="max-w-2xl mx-auto py-6 px-4">
      {/* 今日主题横幅 */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white mb-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-4xl">{todayTheme.emoji}</span>
              <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                今日挑战
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-1">{todayTheme.title}</h2>
            <p className="text-white/90">{todayTheme.description}</p>
          </div>
          <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-bold hover:bg-purple-50 transition flex items-center space-x-2">
            <Upload size={20} />
            <span>参战</span>
          </button>
        </div>
      </div>

      {/* 排行榜提示 */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-800 flex items-center">
          <Trophy className="text-yellow-500 mr-2" />
          今日战况
        </h3>
        <span className="text-sm text-gray-500">实时更新中...</span>
      </div>

      {/* 帖子列表 */}
      <div className="space-y-6">
        {mockPosts.map(post => (
          <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            {/* 用户信息 */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-3">
                <img src={post.avatar} className="w-10 h-10 rounded-full" alt="" />
                <span className="font-semibold text-gray-800">{post.username}</span>
              </div>
              {/* 排名徽章 */}
              {post.rank <= 3 && (
                <div className="text-3xl">
                  {post.rank === 1 ? '🥇' : post.rank === 2 ? '🥈' : '🥉'}
                </div>
              )}
            </div>

            {/* 图片 */}
            <img src={post.image} className="w-full h-64 object-cover" alt="" />

            {/* 用户说明 */}
            <div className="p-4">
              <p className="text-gray-700 mb-3">{post.caption}</p>

              {/* AI评论（高亮） */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border-l-4 border-purple-500">
                <div className="flex items-start space-x-2">
                  <span className="text-2xl">🤖</span>
                  <div>
                    <p className="text-xs font-bold text-purple-700 mb-1">AI毒舌评委</p>
                    <p className="text-sm text-gray-700 italic">{post.aiRoast}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 互动按钮 */}
            <div className="px-4 pb-4 flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-red-500">
                <span>❤️</span>
                <span className="font-semibold">{post.likes}</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
                <span>💬</span>
                <span>评论</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 hover:text-green-500">
                <span>⭐</span>
                <span>投票</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}