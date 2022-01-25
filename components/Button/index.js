import { colors } from "../../styles/Theme";


export default function Button ({children, onClick}) {

    return(

        <>
            <button onClick={onClick}>
                {children}
            </button>

            <style jsx>{`

                button{
                    align-items:center;
                    display:flex;
                    background:${colors.loginButton};
                    font-size:15px;
                    color:${colors.withe};
                    border-radius: 5px 5px;
                    font-weight:600;
                    padding: 8px 16px;
                    cursor:pointer;
                    transition: opacity .3s ease;
                    
                }

                button:hover{
                    opacity: .8;
                }

                button > :global(svg) {
                    margin-right: 8px;
                }


            
            `}</style>

        </>
    

    )
}