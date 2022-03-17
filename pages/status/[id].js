import Devit from "components/Devit";


export default function CommtnPage (props) {


        return (
            <> 
                <Devit {...props} />
            </>
    ) 

}  

// posteo la informacion en el server en cada momento que se selecciona el objeto


export async function getServerSideProps(context){

    //  context puedo recuperar params , res , req ,query 
    const {params, res} = context
    const {id} = params
    
    

const apiResponse = await fetch(`http://localhost:3000/api/comments/${id}`)   
if(apiResponse.ok){
    const props = await apiResponse.json()
        return {props: props}

} if (res){
    res.writeHead(301,{Location:"/Home"}).end()
}
      
}


/*

SE HA DEJADO DE USAR PERO ES IMPORTANTE 

// con lo que hice en api [id], lleve la info de la DB al servidor,
//ahora con el getInitialProps estoy recuperando esa info que esta en el 
//servidor, para usarla. 


CommtnPage.getInitialProps = (context) => {
    const {query} = context
    const {id} = query

    //Con ese id que recupero del servidor, hago un fetch y traigo
    //la info que traje del DB en el api/comments/[id]

    //retorno un fetch con promesa (async)
   
    
        return fetch(`http://localhost:3000/api/comments/${id}`)
        .then((apiResponse)=>{
            if(apiResponse.ok) return apiResponse.json()
        } )
    

}

*/