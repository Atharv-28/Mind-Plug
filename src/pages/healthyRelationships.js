import React from "react";
import "../styles/hr.css"

const HealthyRelation = ()=> {
    return(
        <div className="container">
            <h1 className="tit">Healthy Relationships</h1>
            <div className="child improve" >
                <h2 className="note">How to Improve Your Social Wellness</h2>
                <ul>
                    <li className="listele">Start with Self Care</li>
                    <li className="listele">Making Friends (and Maintaining Friendships)</li>
                    <li className="listele">Small Talk</li>
                    <li className="listele">Reaching Out</li>
                    <li className="listele">Find a Community Group</li>
                    <li className="listele">Nurture Your Relationships</li>
                </ul>
            </div>
            <div className="ex child">
                <h3>
                    Example of Healthy Relationships
                </h3>
                <p>
                Matt, 28, completed a degree and started working full-time from the age of 22. Soon after, Matt moved out of his parents’ house. Living alone, Matt wouldn’t usually see or speak to anyone from the time he left work to the following day at work. He spent most of his free time online gaming and had a limited social life. Matt began drinking heavily to fill in the lonely hours and his health suffered. His depression and alcohol consumption meant his long-term health outlook was poor until he met a girlfriend. They see each other after work each day and socialise with friends on the weekend. They’re planning on getting married in the next couple of years. Matt will benefit from the social support marriage provides with a sense of feeling loved, cared for, and listened to.   
                </p>
            </div>
        </div>
    )
}

export default HealthyRelation;