- ES IMPORTANTE: tener en cuenta que todo lo que veo en el api , es lo relacionado a la base de datos. creo que es lo relacionado a la hidratación. como yo puedo crear o manejar la indo en el servidor para no solicitarla del cliente y manejar la pagina. Ejemplo de esto es lo que realice con el adm, donde con la info que viene de la base de datos creo una especie de pagina aparte (el servidor) de donde luego se servirá mmi app para funcionar. O sea creo unos tipos JSON donde busco la info. Lo mismo para la informacion que tengo para hacer el home.
En el caso de las rutas dinamicar, cree un file admin en firebase para inicializar firestore, luego en api cree la request y el resp, donde se ejecuta todo lo que explico arriba del servidor.


- NAVAGACION PROGRAMATICA = usando useRouter 
- LINK + <a> = para crear navegacions SPA

- DATA FECHING = recuperar datos, pero puedo hacerlo desde el cliente como por ejemplo el FetchLastestComments (en client.js), el problema de esto es que mientras espero esa info desde el usuario, debo mostrarle un placeHolder o algo para mostrarle mientras esa info me llaga (por eso uso el useEffect),
pero hay ciertas paginas que podemos recuperar esa info que necesitamos desde el servidor (mas rapido, ya tenemos esa info). 
* getInitialProps () , metodo para hacer data fetch. Este method debe ser una propiedad estática de la funcion.(funciona con clases tambien). Ej: ver Home /status /[id]
DevitPage.getInitialPorps() , se ejecuta siempre en el servidor y en el cliente cuando pasas de una pagina a otra. Cuando se ejecita en el servidor, es por que se esta renderizando la pagina el servidor, luego se ejecuta solo la parte del cliente. conclucion, se ejecuta en el servidor primero y luego en el cliente lo que va necesitando. Recibe un parametro "context" , tiene la query (de donde saco el segmento de ID cuando clickeo un tweet especifico, lo que no sabía), tiene la request y la respons (en el caso que estemos en el servidor) ese context tiene tambien el pathname (la ruta queestamos navegando.
Toda la info la envio como props al componente pagina osea como props a ese DevitPage(props)

IMPORTANTE: no es que sea mas rapido trayendo la información del servidor, sino que tiene ventajas como por ejemplo renderiza todo en el servidor lo que dara mas info a los crawlers, ser´mas rapido en caso que la info no varíe, etc. Sirve renderizarlo en el servidor cuand oes info que no cambia, 

Se llama rehidratación por que cuando se ejecuta en el servidor, se renderiza todo alli pero como un elementro estatico puro string. Esa información que se recupera del servidor la utiliza el cliente para hidratar a la aplicación (o rehidratarla)
Trabajando con el servidor debo utilizar rutas absolutas, una ves que estoy en el cliente ya puedo usar rutas relativas. 

El firebase Admin me permite acceder a info de la DB sin pasar por el cliente, creando un endpoint como vi ese json en un tipo de pagina nueva, de esta forma puedo utilizar la info y hacer renderizados fuera del clinte. Luego lo relaciono con todo lo que estoy viendo de renderizar en server o en el cliente.  

La informacion o paginas con info que es siempre nueva, va cambiand mucho, debo 
renderizar en el cliente. No se hace el proceso de firebase Admin.  


// LISTEN //
es parecido al method getm, pero recibe un snapshot, una foto de todo lo nuevo en toodo momento por lo que se va actualizando automaticamente.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
