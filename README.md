# pdf-editor
PDF-Editor app using ReactJs and Flask

**Functionalities**
-   Input file from a user
-   Sending a file to the backend _Flask_ server
-   using '_pdfplumber'_ python library to extract tabular data from pdf
-   custom function to convert extracted data to JSON
-   store JSON values on a MongoDB collection
-   retrieve the JSON data and map to a table as well as PDF Preview

**Python Librarires Used**
dnspython          2.2.1
Flask              2.1.2
Flask-Cors         3.0.10
Flask-PyMongo      2.3.0
pdfplumber         0.7.1
pymongo            4.1.1

**Node Modules Used**
axios":  "^0.27.2",
"react":  "^18.2.0",
"react-dom":  "^18.2.0",
"react-pdf":  "^5.7.2"
