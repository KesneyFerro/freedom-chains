from fastapi import FastAPI, Response
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from LLM.AI import generate_guard_comments, generate_detainee_report
from LLM.html_to_pdf import generate_pdf_from_html
from pydantic import BaseModel

class MyData(BaseModel):
    id_detento: str
    historico: list

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/historico/json")
async def get_historico_json(data: MyData):
    relatorio_json = generate_guard_comments(data)
    return relatorio_json

@app.post("/historico/pdf")
async def get_historico_pdf(data: MyData):
    relatorio_json = await get_historico_json(data)
    html_detainee_report = generate_detainee_report(relatorio_json)

    html_detainee_report = html_detainee_report.strip("```html").strip("```")

    pdf_bytes = generate_pdf_from_html(html_detainee_report)

    return Response(content=pdf_bytes, media_type="application/pdf")
