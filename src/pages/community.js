import React from "react";
import "../styles/com.css"

const Community = ()=> {
    return(
        <div className="msc">
            <h1 className="tit">Community Engaement</h1>
            <div className="cbmsh">
                <h2>Suggestions for getting involved : </h2>
                <ul>
                    <li>Volunteering</li>
                    <li>Join An Organization</li>
                    <li>Create A Group Of Friends Who Have The Same Interests As You Do</li>
                    <li>Start A Project That Will Help Your Community In Some Way</li>
                    <li>Look For A Local Event</li>
                </ul>
            </div>
            <div className="one">
            <div className="exp">
                    <h2 className="sigtit">Benefits of community engagement:</h2>
                    <ul>
                    <li className="listele">Audience Reach </li>
                    <li className="listele">Community Relationship</li>
                    <li className="listele">Decision Making </li>
                    <li className="listele">Community Organization Skills</li>
                    <li className="listele">Resource Management</li>
                    </ul>
                </div>
                <div className="sig">
                    <h2 className="sigtit">Activities to consider:</h2>
                    <ol className="listsig">
                        <li className="listele">Parties</li>
                        <li className="listele">Marriages</li>
                        <li className="listele">Celebration</li>
                        <li className="listele">Family events</li>
                        <li className="listele">Local events</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Community;