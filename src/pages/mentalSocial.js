import React from "react";
import "../styles/ms.css"

const MentalSocial = ()=> {
    return(
        <div className="msc">
            <h1 className="tit">Mental Health & Social Health</h1>
            <div className="cbmsh">
                <h2>Connection between mental health & social health </h2>
                <p>As we explore deeper into the pillars of mental health, it is essential to understand that mental health is tightly connected and dependent on our social interactions. As Mental Health Awareness Month comes to an end, we must keep the momentum healthy throughout the rest of the year, and our mental health should be a priority every day of the week, regardless of the month. Mental health encompasses our physical health, emotional health, cognitive health, and social health. Over the last few weeks, we discussed the relationship between:</p>
                <ul>
                    <li>Emotional health and mental health</li>
                    <li>Physical health and mental health</li>
                    <li>Cognitive health and mental health</li>
                </ul>
            </div>
            <div className="one">
            <div className="exp">
                    <h2 className="sigtit">How to reduce Stress:</h2>
                    <ul>
                    <li className="listele">Get more physical activity </li>
                    <li className="listele">Eat a balanced diet </li>
                    <li className="listele">Minimize phone use and screen time </li>
                    <li className="listele">Reduce your caffeine intake </li>
                    <li className="listele">Spend time with friends and family </li>
                    <li className="listele">Create boundaries and learn to say no </li>
                    <li className="listele">Avoid procrastination </li>
                    </ul>
                </div>
                <div className="sig">
                    <h2 className="sigtit">How to deal with loneliness:</h2>
                    <ol className="listsig">
                        <li className="listele">Reframe loneliness as an opportunity</li>
                        <li className="listele">Get comfortable with the uncomfortable</li>
                        <li className="listele">Be kind to yourself</li>
                        <li className="listele"> Talk to someone you trust</li>
                        <li className="listele">Don't be afraid to reach out for help</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default MentalSocial;