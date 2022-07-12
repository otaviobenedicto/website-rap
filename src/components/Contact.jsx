import React from "react"
import Common from "./common/Common"

import imgRap from "../../src/components/img/rap-img3.jpg"

const Contact = () => {
  return (
    <>
      <section className='contact creative' id="contact">
        <div className='container'>
          <div className='itemContent'>
            <Common title='contact' />
            <div className='content flex'>
              <div className='contentRight'>
                <img src={imgRap} alt='' />
              </div>
              <div className='contentLeft'>
                <span>
                  <i class="fab fa-instagram" aria-hidden="true"> </i>
                  @salesrapper
                </span>
                <br /> <br />
                <span>
                  <i className='fab fa-facebook'></i>
                  sales domain
                </span>
                <br /> <br />
                <span>
                  <i className='fa fa-phone'></i>
                  +123 456 7890
                </span>
                <form>
                  <input type='text' placeholder='YOUR NAME' name='' id='' />
                  <input type='text' placeholder='YOUR EMAIL' name='' id='' />
                  <input type='text' placeholder='WHAT ARE YOU INTERSTED IN?  ' name='' id='' />
                  <textarea cols='30' rows='10' placeholder="YOUR MESSAGE">
                  </textarea>
                  <button className='primary-btn'>
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact