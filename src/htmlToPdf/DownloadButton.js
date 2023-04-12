import React, { useRef } from 'react';
import MyCv from './CVtoConvert';
import { useReactToPrint } from 'react-to-print'

const ExportPdf = () => {
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div style={{backgroundColor: "black"}}>
      <MyCv ref={componentRef} />
      <button onClick={handlePrint}>Print this out</button>
    </div>
  )
}

export default ExportPdf
