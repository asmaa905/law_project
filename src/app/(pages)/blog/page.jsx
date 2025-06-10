
"use client";
import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faBalanceScale, faCheck, faDiamond, faDotCircle, faEnvelope, faEye, faEyeSlash, faGraduationCap, faHandshake } from '@fortawesome/free-solid-svg-icons';
export default function Blog() {
    return (
        <>
            <div className="blog">
                <div className="container">
                    <div className="articles"></div>
                    <div className="filter"></div>
                </div>
            </div>
        </>
    );
}
