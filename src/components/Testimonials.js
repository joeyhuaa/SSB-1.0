import React from 'react'

const Review = (props) => {
  return (
    <div style={{'marginBottom':'7em'}}>
      <h3 style={{'fontFamily': 'Love Ya Like A Sister'}}>{props.review}</h3>
      <span style={{'float':'right'}}>{props.name}</span>
    </div>
  )
}

function Testimonials() {
  return (
    <div className='white-contain'>
      <Review 
        review = '"MY CHILD ALWAYS LOOKS FORWARD TO THE NEXT CLASS. MIKE IS VERY SKILLED AND PATIENT. I HIGHLY RECOMMEND HIM."'
        name = '-SREE C.'
      />
      <Review 
        review = '"MIKE IS A FLEXIBLE, ENTHUSIASTIC AND FRIENDLY COACH THAT YOU WOULD LOVE TO HAVE FOR YOUR KIDS…"'
        name = '-MONICA T.'
      />
      <Review 
        review = '"IT MAKES MY DAY SEEING HOW HAPPY AND ACCOMPLISHED DYLAN AND NATE ARE WHEN I PICK THEM UP…"'
        name = '-BEN C.'
      />
    </div>
  )
}
export default Testimonials