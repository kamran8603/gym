import React from "react";
import "./Result.css";

function Result() {
  return (
    <div className="result_full">
      <div className="result_description">
        <h1 className="result_heading">GETTING RESULTS SINCE 2010</h1>
        <p className="result_paragraph">
          The Armoury would be nothing without the men and women that have put
          their trust in us over the last 10 years, and working together we've
          had the<br></br> privilege of seeing some truly tremendous
          accomplishments. Whether that means gaining the confidence to wear a
          two-piece at the beach after having their<br></br> first child,
          fitting into the suit they always imagined they'd wear for their
          daughters wedding, or the everyday confidence that permeates
          everything they do,<br></br> installed through the effort they've put
          in at the studio.{" "}
        </p>
        <p className="result_paragraph_two">
          Our client's success are at the forefront of The Armoury's "Why"-
          <br></br>
          <a href="//">click here</a> to have a chat about working together to create your own
          transformation
        </p>
      </div>

      <div className="first_result_image">
        <img
          src="https://www.armourycoachingstudio.co.uk/uploads/1/2/9/5/129586512/personal-trainer-for-milton-keynes_orig.png"
          alt=""
        />
        <img
          className="result_second_image"
          src="https://www.armourycoachingstudio.co.uk/uploads/1/2/9/5/129586512/personal-trainer-for-milton-keynes-1_orig.png"
          alt=""
        />
      </div>

      <div className="result_container">
      <div className="result_word_one">
        <p className="result_word_one_para">
          
            <br></br><br></br><q>
            Working from home meant my body felt stiffer, my energy<br></br>{" "}
            plummeted and my motivation to train was non-existent. <br></br>
            However working with the Armoury has completely turned that<br></br>{" "}
            around- the support they offer is second to non not only in their{" "}
            <br></br>training sessions, but also their lifestyle and nutrition
            coaching. <br></br>I've got my energy back, and have ended up with a
            physique <br></br>better than even when I was in my 20s!
          </q>
          <br></br>
          <br></br><b>- Dave Wood</b>
        </p>


        <div className="result_word_two">
        <p className="result_word_two_para">
            <br></br><q>
        I love our training and never get bored, it helps me balance my<br></br> busy life as a mum and gives me the time to focus on myself. Best<br></br> decision I ever made was booking my first session at The<br></br> Armoury!<br></br></q>
          <br></br> <b>- Kyla Clarke</b>
        </p>
      </div>


      </div>

      <input value="SEE MORE RESULT" type="button" className="about_button" />
      </div>
      
      
    </div>
  );
}

export default Result;
