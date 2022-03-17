
import { logout } from "../../firebase/client";

const BtnLogout = () => {

    const handleLogout = () =>{
        logout()  
    }



    return (
        <>
            <button
                onClick={handleLogout}
            >
                Logout
            </button>
            <style jsx>{`

                button{
                    margin-right:1rem;
                    border:none;
                    background:none;
                    color:#C53030;
                    font-size: 18px;
                    font-weight: 700;
                    cursor:pointer
                    
                    

                }
            `}
            
            </style>
        </>
    );
};

export default BtnLogout;