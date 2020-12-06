from typing import Optional

from fastapi import FastAPI, Header, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.templating import Jinja2Templates

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["OPTIONS", "GET"],
    allow_headers=["*"],
)
templates = Jinja2Templates(directory="templates")
version = "0.1.0"


@app.get("/")
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request, "version": version})
