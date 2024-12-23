import React from 'react';
import CordingSkill from './CordingSkill.jsx';
import Tool from './Tool.jsx';
import Etc from'./Etc.jsx';

export default function MySkills() {

    return (
            <div className="skills">
                <CordingSkill />
                <Tool />
                <Etc />
            </div>
    );
}

