# api/index.py
# FastAPI server setup with CORS support and a search endpoint.

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict

app = FastAPI()

# Setup CORS middleware to allow requests from any origin.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

sample_data = [{"title": "AI"}]  # Simplified sample data definition

# Search endpoint that filters sample data based on the query.
@app.get("/search", response_model=List[Dict])
async def search(query: str):
    return [item for item in sample_data if query.lower() in item["title"].lower()]  # Single-line return
