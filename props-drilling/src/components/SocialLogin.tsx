import React, { useState } from "react";
import RenderName from "./RenderName";

interface socialProps {
    name: string,
    updateName : (values: string)=> void,
}


const SocialLogin: React.FC<socialProps> = (props) =>{
    const [enterName, setEnteredName] = useState<string>('')
    const {updateName, name} = props;
    return(<>
    
        <div className="social-container">
            <input type="text" placeholder="i am social" onChange={(e)=> updateName(e.target.value)} />
        </div>
        <RenderName name={name} />
        
    
    </>)
}

export default SocialLogin;