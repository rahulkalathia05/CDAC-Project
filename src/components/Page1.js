import React from 'react'
import "./page1.css";
import nav1 from './nav.jpg'
import bg1 from './bg1.jpg'

export default function Page1() {
  return (
    <div className="desktop-2">
      <div className="practice-parent">
        <div className="practice">Practice</div>
        <div className="theory">Theory</div>
        <div className="challenges">Challenges</div>
        <img
          className="whatsapp-image-2022-09-19-at-1"
          alt=""
          src={nav1}
        />
      </div>
      <img className="bg1-1-icon" alt="" src={bg1} />
      <div className="conjunction-if-two-statement-parent">
        <div className="conjunction-if-container">
          <p className="conjunction-if-two-statement">
            <span className="conjunction">Conjunction</span> : If two statements
            are combined using the connective 'and' then it is called as
          </p>
          <p className="conjunction-if-two-statement">a conjunction</p>
        </div>
        <div className="disjunction-if-container">
          <span className="conjunction">Disjunction</span> : If two statements
          are combined by using the logical connective 'or' then it is called as
          a disjunction
        </div>
        <div className="negation-of-a-container">
          <p className="conjunction-if-two-statement">
            <span className="conjunction">Negation of a statement</span> : For
            any given statement p, there is another statement which is
          </p>
          <p className="conjunction-if-two-statement">
            defined to be true when p is false, and false when p is true, is
            called the negation of p and is
          </p>
          <p className="conjunction-if-two-statement">denoted by ~p.</p>
        </div>
      </div>
    </div>
  )
}
