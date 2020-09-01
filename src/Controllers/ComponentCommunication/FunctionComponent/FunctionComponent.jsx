import React from 'react';

import FunctionComponentParentToChild from './functionComponetParentToChild';


const id = 123;
const name = 'John Smith';
const dept = 'Developer';
const totProjects = 5;
const salary = 1200000;
const basic = 20000;
const hra = 100000;
const allowance = 100000;



export default function FunctionComponent() {
    return (
        <>
            <h3 className="text-light bg-dark text-center">Function Component : </h3>
            <FunctionComponentParentToChild 
                id = "123" 
                name = "John Smith" 
                dept = "Developer" 
                totProjects = "5" 
                salary = "1200000" 
                basic = "20000" 
                hra = "100000" 
                allowance = "100000" 
            />
        </>
    );
}