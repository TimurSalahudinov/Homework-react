import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import '../components/Footer.css'
export default function MyFooter() {
  return (
    <MDBFooter id="footer" className='text-center text-white' style={{ backgroundColor: '#21081a' }}>
      <MDBContainer className='p-2'></MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright: 
        <a className='text-white' href='https:\\makers.kg'>
        Makers.kg
        </a>
      </div>
    </MDBFooter>
  );
}