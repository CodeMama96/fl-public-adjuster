import React from 'react'

import './Home.css'

// import './Home.scss'

export default function home() {
    return (
        <div className='home'>
        <div className='background-img'>
            <div id='title'>
            <h1 className='h1-title'>A Public Adjuster That Helps</h1>

                <p class="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>

                <div className='homeRow'>
                <div className='column1'><h1>column1</h1></div>

<div className='column2'>

                <div class="container ">
	<div class="row">
			<h1>contact us</h1>
	</div>
	<div class="row">
			<h4 style={{textAlign:"center"}}>We'd love to hear from you!</h4>
	</div>
	<div class="row input-container">
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="text" required />
					<label>Name</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input">
					<input type="text" required />
					<label>Email</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input" style={{float:"right"}}>
					<input type="text" required />
					<label>Phone Number</label> 
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<textarea required></textarea>
					<label>Message</label>
				</div>
			</div>
			<div class="col-xs-12">
				<div class="btn-lrg submit-btn">Send Message</div>
			</div>
	</div>
</div>
</div>
</div>

                {/* <div class="button2">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    START CLAIMS PROCESS
                </div> */}
            </div>
          
        </div>
        
        <div className='ourCompany'>
        <p className="ourCompanyText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet porttitor lacus luctus accumsan. Integer eget aliquet nibh praesent.</p>
            <button class="button2" style={{backgroundColor:'black'}}>LEARN MORE</button>
            <h3>LICENSED PUBLIC ADJUSTERS</h3>
            <img></img>
            <h3>EXPERIENCED AND PROFESSIONAL</h3>
            <img></img>
            <h3>DETIALED CLAIMS PROCESS</h3>
            <img></img>
        </div>
        <div className='howItWorks'>
            <h1>HOW IT WORKS</h1>
            <h3>IDENITFY CLAIM</h3>
            <img></img>
            <h3>FILE</h3>
            <img></img>
            <h3>WE WORK</h3>
            <img></img>
            <h3>CALL US TODAY FOR FREE CONSULTATION</h3>
            <h2>Call 347-216-1966</h2>
        
        </div>
        <div className='typesOfClaims'>
        <h2> TYPES OF CLAIMS</h2>
       <p>
       When most people think of an insurance claim, they immediately think of some sort of catastrophic event for which they need to file a claim. However, most policies of insurance provide coverage for many other types of losses which should be carefully considered. Foremost Public Adjusters provides professional insurance claim representation for the following types of losses.
       </p><img></img>
        <ul className='listItems'>
            <li>HURRICAN DAMAGE</li>
            <li>FIRE DAMAGE</li>
            <li>WIND DAMAGE</li>
            <li>FLOOD DAMAGE</li>
            <li>MOLD DAMAGE</li>
            <li>WATER DAMAGE</li>
        </ul>
        <button class="button2" style={{backgroundColor:'black'}}>LEARN MORE</button>
        </div>



        </div>
    )
}
