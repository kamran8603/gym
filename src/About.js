import React from 'react'
import './About.css';

function About() {
  return (
    <div className='about'>
        <h1 className='about_firstline'>IT'S TIME TO PUT YOURSELF FIRST</h1>
        <p className='about_secondline'>We work with men and women that have let fitness slide down their list of priorities, and want to make a<br></br> change</p>
        <p className='about_thirdline'>Using our<i> Armoury Transformation Formula,</i> we'll guide you through our proven system of creating a <br></br>healthier, happier and more confident version of yourself in the next 6 weeks- without boring workouts,<br></br> or fad diets</p>
        <p className='about_fourthline'>We believe fitness should enhance your life, rather than take away from it- every Armoury Transformation<br></br> starts with an in-depth look at where you currently are, and creates an achievable path to where you<br></br> want to be.</p>
        <p className='about_fiveline'>Whether that's ditching the mid-afternoon energy slump so you can be active with your kids after school, <br></br>banishing the expanding midsection that's making it harder to slide into your work trousers each passing<br></br> year, or finally having the body confidence to buy clothes that show off your physique, rather than hide it</p>

        <p className='about_sixline'>In just 42 days we'll take you from feeling frustrated with your current trajectory, to feeling proud of<br></br> the positive habits you've built</p>
        <p className='about_sevenline'>​If you feel ready to take action, and put yourself first? <a href="url">Click Here,</a> and claim your free trial</p>
        <input value="ABOUT-US" type="button" className="about_button" />
        </div>
  )
}

export default About