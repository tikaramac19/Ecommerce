import React, { useState } from "react";


interface socialProps {
    updateName : (values: string)=> void,
}


const SocialLogin: React.FC<socialProps> = (props) =>{
    const [enterName, setEnteredName] = useState<string>('')
    const {updateName} = props;
    return(<>
    
        <div className="social-container">
            <input type="text" placeholder="i am social" onChange={(e)=> updateName(e.target.value)} />
        </div>
        
    
    </>)
}

export default SocialLogin;