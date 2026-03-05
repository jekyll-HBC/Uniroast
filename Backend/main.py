from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import get_db

app = FastAPI(title="UniRoast API", version="1.0.0")

# 配置CORS（允许前端访问）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite开发服务器
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 测试端点
@app.get("/")
def read_root():
    return {"message": "UniRoast API is running! 🚀"}

# 测试数据库连接
@app.get("/test-db")
def test_database(db: Session = Depends(get_db)):
    try:
        # 执行一个简单的查询
        db.execute("SELECT 1")
        return {"status": "success", "message": "Database connected! ✅"}
    except Exception as e:
        return {"status": "error", "message": str(e)}