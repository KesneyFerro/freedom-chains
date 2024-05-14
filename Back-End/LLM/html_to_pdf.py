from weasyprint import HTML
from io import BytesIO

def generate_pdf_from_html(html_content: str) -> bytes:
    # Generate PDF from HTML
    pdf_file = BytesIO()
    HTML(string=html_content).write_pdf(pdf_file)
    pdf_bytes = pdf_file.getvalue()
    return pdf_bytes