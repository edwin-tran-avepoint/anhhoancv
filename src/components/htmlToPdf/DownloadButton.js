import React, { useRef } from 'react';
import MyCv from './CVtoConvert';
import jsPDF from 'jspdf';
import { renderToString } from "react-dom/server";

const DownloadButton = () => {
  const string = renderToString(<MyCv />)
  const pdf = new jsPDF("p")

  async function handlePrint() {
    pdf.fromHTML(string);
    pdf.save("anhhoanCv")
    // console.log(string);
    // const pdfSave = await pdf.fromHTML(string)
    // console.log(pdf.html(string));
  }

  return (
    <button className="fixed top-0 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handlePrint}>Print this out</button>
  )
}

export default DownloadButton
