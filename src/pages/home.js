import React from "react";
import "../styles/home.css"

const Home = ()=> {
    return(
        <div className="home">
            <h1 className="title">Social Health</h1>
            <div className="intro">
                <div className="paras"> 
                <p className="para">
                Social health is the aspect of overall well-being that stems from connection and community. It’s about having close bonds with family and friends, enjoying a sense of belonging to groups, and feeling supported, valued, and loved.
                </p>
                <p className="para">
                To summarize decades of scientific studies, our relationships determine both how well we live and how long we live; connection is as vital to survival as food and water. For instance, research has shown that positive, satisfying relationships are one of the best predictors of health across the lifespan, whereas loneliness is more deadly than obesity. That’s why it’s helpful to distinguish social health as a distinct yet interconnected pillar of overall well-being.
                </p>
                </div>
                <img className="imgi" src="https://images.squarespace-cdn.com/content/529cde82e4b0afaae98d976b/1390673132391-LUI5EWAKRT382CAKCW1B/2014JanHealthandSocialCareGenericBanner1500.jpg?format=1000w&content-type=image%2Fjpeg" />
            </div>
            <div className="importance">
                <h2 className="titim">
                    Importance of Social Health 
                </h2>
                <ol className="list">
                    <li className="listele"> Improved immunity</li>
                    <li className="listele"> Less inflammation</li>
                    <li className="listele"> Better cardiovascular health</li>
                    <li className="listele"> Less pain and better pain management</li>
                    <li className="listele"> Improved cognitive skills</li>
                </ol>
            </div>
        </div>
    )
}

export default Home;