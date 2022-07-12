import React from "react"
import { work } from "../dummydata"
import imgRap2 from "../../src/components/img/rap-img2.jpg"
import Common from "./common/Common"

const Work = () => {
  return (
    <>
      <section className='work creative education' id="work">
        <div className='container'>
          <div className='itemContent'>
            <Common title='empolye' />

            <div className='content flex'>
              <div className='contentLeft'>
                {work.map((val) => {
                  return (
                    <>
                      <div className='box flex'>
                        <button className='primary-btn'>{val.years}</button>
                        <h2>
                          {val.compnay} <br />
                          <p>{val.desc}</p>
                        </h2>
                      </div>
                    </>
                  )
                })}
              </div>
              <div className='contentRight'>
                <img src={imgRap2} alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Work