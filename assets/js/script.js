// URL de la API: https://jsonplaceholder.typicode.com/posts

// 1. Realizar una petición a la API usando Async/Await.
const getPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
        const response = await fetch(url);
        const data = await response.json();

        //2. Mostrar el resultado de peticiuón en HTML
        let showData = document.getElementById("post-data");

        data.forEach((element) => {
            showData.innerHTML +=   `<ul>
                                        <li><strong>${element.title}</strong></li>
                                        <li style="list-style-type: none">${element.body}</li>
                                        </br>
                                    </ul>`
        });

     //3. Manejar si hay algún error con Try/Catch.
    } catch (error) {
        console.log(error);
    }
};