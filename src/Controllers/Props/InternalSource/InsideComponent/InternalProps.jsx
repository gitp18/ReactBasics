import React from 'react';
import ClassComponentPropsAsAttribute from './classComponentPropsAsAttribute';
import FunctionComponentPropsAsAttribute from './functionComponentPropsAsAttribute';


import ClassComponentPropsAsChildren from './classComponentPropsAsChildren';
import FunctionComponentPropsAsChildren from './functionComponentPropsAsChildren';
//FunctionComponentPropsAsAttribute.defaultProps = {age: 50};
//ClassComponentPropsAsAttribute.defaultProps = {age: 50};
export default function InternalProps() {
    return (
        <>
        <h1 className="text-center text-primary">props passed through Component "As Attribute"</h1>
        <div className="row">
            <div className="col-6"><FunctionComponentPropsAsAttribute /></div>
            <div className="col-6"><ClassComponentPropsAsAttribute /></div>
        </div>
        <h1 className="text-center text-primary">props passed through Component "As Children"</h1>
        <div className="row">
            <div className="col-6">
                <FunctionComponentPropsAsChildren></FunctionComponentPropsAsChildren>
            </div>
            <div className="col-6">
                {/* <ClassComponentPropsAsChildren></ClassComponentPropsAsChildren> */}
            </div>
        </div>
        </>
    );
}
