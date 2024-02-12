import React from "react";
import "../styles/sh.css"

const SocialHealth = ()=> {
    return(
        <div className="container">
            <h1 className="tit">About Social Health</h1>
            <div className="one">
                <div className="exp">
                    <h2>Information</h2>
                    <p>Social health can be defined as our ability to interact and form meaningful relationships with others. It also relates to how comfortably we can adapt in social situations. Social relationships have an impact on our mental health, physical health and mortality risk. 
                        Over the years, sociologists have created a link between social relationships and health outcomes. Studies are showing that social relationships both quality and quantity are having short and long-term effects on our health.</p>
                </div>
                <div className="sig">
                    <h2 className="sigtit">Significance of Healthy Social Health</h2>
                    <ol className="listsig">
                        <li className="listele">Balancing your social and personal time</li>
                        <li className="listele">Being engaged with other people in the community</li>
                        <li className="listele">Adapting in social situations </li>
                        <li className="listele">To be yourself in all situations</li>
                        <li className="listele">Treating others with respect</li>
                    </ol>
                </div>
            </div>
            <div className="impact">
                <h3>Why Is Social Health Important?</h3>
                <p>Our social health and social wellness are a vital part of our overall health and wellbeing. According to the Australian Government “social relationships are protective of mental health”. </p>
                <p>We interact with people every day. The quality and quantity of our relationships affect our mental and physical wellbeing. Maintaining a good level of social wellness lets you build interpersonal relationships with others. These relationships include friendships, intimate relationships, platonic, family, and professional (work) relationships. </p>
                <p>Studies show that people with poor social interactions are more likely to die younger than those with high involvement rates. </p>
                <div className="child">
                    <h4>Researchers have also linked the following health issues to poor social health:</h4>
                    <ol className="listsig">
                    <li className="listele">Suffering a heart attack </li>
                    <li className="listele">Chronic disease </li>
                    <li className="listele">Mobility issues </li>
                    <li className="listele">High blood pressure</li>
                    <li className="listele">Anxiety & depression </li>
                    <li className="listele">Cancer</li>

                    </ol>
                </div>
            </div>
        </div>
    )
}

export default SocialHealth;