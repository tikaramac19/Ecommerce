import React from "react";

interface otpProps  {
        updateName : (values: string) => void
}

const OtpLogin: React.FC<otpProps> = (props) =>{
    const {updateName} = props
    return(<>
    
        <div className="social-container">
            <input type="text" placeholder="i am otpLogin"  onChange={(e) => updateName(e.target.value) }/>

        </div>
        
    
    </>)
}

export default OtpLogin;