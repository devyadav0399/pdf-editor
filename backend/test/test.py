from typing import final
import pdfplumber
import json

x = './example.pdf'

def fileToJson(file):
  pdf = pdfplumber.open(file)
  page = pdf.pages[0]
  tables = page.extract_tables()

  table = tables[0]

  keys = table[0]

  values = table[1:]

  finalData = []

  for j in range(0, len(keys)):
    json_data = {}
    for i in range(0, len(keys)):
      json_data[str(keys[i])]=values[j][i]
    finalData.append(json_data)

  return json.dumps(finalData)

print(fileToJson(x))

