import React from 'react';

import ClassComponent from './ClassComponent/ClassComponent';
import FunctionComponent from './FunctionComponent/FunctionComponent';


export default function ComponentCommunication () {
    return (
        <>
            <h1 className="text-center text-success">Component ComponentCommunication</h1>
            <div className="row">
                <div className="col-md-6">
                    <FunctionComponent />
                </div>
                <div className="col-md-6">
                    <ClassComponent />
                </div>
            </div>
        </>
    );
}