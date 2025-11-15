from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# (Bạn sẽ import các router khác ở đây sau)
# from .routers import auth, timetable

app = FastAPI(
    title="Student Tracker API",
    version="0.0.1"
)

# Cấu hình CORS (RẤT QUAN TRỌNG cho hackathon)
# Cho phép Frontend React của bạn gọi được API này
origins = [
    "http://localhost:5173",  # Cổng mặc định của Vite (React)
    "http://localhost:3000",  # Cổng React truyền thống
    # (Thêm domain của Vercel/Netlify sau khi deploy)
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"], # Cho phép tất cả methods
    allow_headers=["*"], # Cho phép tất cả headers
)


@app.get("/", tags=["Health Check"])
def read_root():
    """
    Endpoint kiểm tra API có hoạt động không.
    """
    return {"message": "Welcome to Student Tracker API!"}

# (Bạn sẽ include các router ở đây)
# app.include_router(auth.router, prefix="/api/v1/auth", tags=["Auth"])
# app.include_router(timetable.router, prefix="/api/v1/timetable", tags=["Timetable"])