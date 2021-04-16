import React, { useState } from "react"

import Sidebar from "../components/Sidebar.jsx"

const About = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-4">
          <div className="text-left">
            <h2>เกี่ยวกับเรา</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <p>เรามีผู้เชี่ยวชาญจำนวนมากที่มีประสบการณ์ในการทำงาน อีกทั้งเรายังเป็นบริษัทในกลุ่มบริษัทมหาชนที่มีความ มั่นคงและมีการให้บริการอื่นๆ ที่เกี่ยวข้องกับงานด้านเทคโนโลยีสารสนเทศที่ทันสมัย อาทิเช่น งานด้าน Digital Marketing, Security Printing, Digital Solution และ E-Commerce และอื่นๆอีกมากมาย</p>
        </div>
      </div>
    </>
  )
}

export default About
