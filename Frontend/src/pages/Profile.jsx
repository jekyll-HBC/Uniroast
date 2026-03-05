export default function Profile() {
  const user = {
    username: "张三",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
    bio: "食堂美食鉴定师 | AI吐槽受害者",
    totalPosts: 15,
    totalLikes: 342,
    bestRank: 1
  }

  return (
    <div className="max-w-2xl mx-auto py-6 px-4">
      {/* 用户信息卡片 */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div className="flex items-center space-x-4 mb-4">
          <img src={user.avatar} className="w-20 h-20 rounded-full" alt="" />
          <div>
            <h2 className="text-2xl font-bold">{user.username}</h2>
            <p className="text-gray-600">{user.bio}</p>
          </div>
        </div>

        {/* 统计数据 */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">{user.totalPosts}</p>
            <p className="text-sm text-gray-600">参战次数</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-pink-600">{user.totalLikes}</p>
            <p className="text-sm text-gray-600">获赞总数</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-600">#{user.bestRank}</p>
            <p className="text-sm text-gray-600">最佳排名</p>
          </div>
        </div>
      </div>

      {/* 历史帖子 */}
      <h3 className="text-xl font-bold mb-4">我的战绩</h3>
      <div className="text-center text-gray-500 py-12">
        <p>还没有参战记录</p>
        <p className="text-sm mt-2">快去参加今日挑战吧！</p>
      </div>
    </div>
  )
}