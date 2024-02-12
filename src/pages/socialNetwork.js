import React from "react";
import "../styles/sn.css"

const SocialNetwork = ()=> {
    return(
        <div className="container">
            <h1 className="tit">Social Support Network</h1>
            <div className="one">
                <div className="exp">
                    <h2>Social Support</h2>
                    <p>Social support refers to the psychological and material resources provided by a social network to help individuals cope with stress. Such social support may come in different forms, and might involve:</p>
                    <ul>
                    <li className="listele">Helping a person with various daily tasks when they are ill or offering financial assistance when they are in need.</li>
                    <li className="listele">Giving advice to a friend when they are facing a difficult situation.</li>
                    <li className="listele">Providing caring, empathy, and concern for loved ones in need.</li>
                    </ul>
                </div>
                <div className="sig">
                    <h2 className="sigtit">Health Benefits of Social Support</h2>
                    <p>So now that we understand that our social support systems involve both different types of social support as well as integration into different social groups, it is time to take a closer look at exactly how these social relationships influence both physical and mental health.</p>
                    <ol className="listsig">
                        <li className="listele">Healthy Choices and Behaviors</li>
                        <li className="listele">Coping With Stress</li>
                        <li className="listele">Improves Motivation</li>
                    </ol>
                </div>
            </div>
            <div className="impact">
                <h3>Social support providing Communities: </h3>
                <div className="child">
                    <h4>Follow this links for help:</h4>
                    <ol className="listsig">
                    <li className="listele"><a className="anchor" href="https://health.gov/healthypeople/objectives-and-data/browse-objectives/parents-or-caregivers/reduce-anxiety-and-depression-family-caregivers-people-disabilities-dh-d01">Anxiety & depression</a> </li>
                    <li className="listele"><a className="anchor" href="https://health.gov/healthypeople/objectives-and-data/browse-objectives/social-and-community-context/reduce-proportion-children-parent-or-guardian-who-has-served-time-jail-or-prison-sdoh-05">Child, Parent Relationship</a> </li>
                    <li className="listele"><a className="anchor" href="https://health.gov/healthypeople/objectives-and-data/browse-objectives/cancer/increase-proportion-people-who-discuss-interventions-prevent-cancer-their-providers-c-r02">Interventions to prevent Cancer</a> </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default SocialNetwork;