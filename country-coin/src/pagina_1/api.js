const API_country = "https://restcountries.com/v2/lang/es";

async function api() {

    const response = await fetch(API_country);
    const data = await response.json();

    //let a = "";
    console.log(await data);

    //    for (let i = 0; i < data.length; i++) {
    //        a = a + data[i].name + "<br>";
    //        a = a + data[i].capital + "<br>";
    //        a = a + "<a href='detail.html?id=" + data[i].numericCode + "'>detalle</a><br>";
    //        a = a + "<img src='" + data[i].flag + "' width='100' height='50'>" + "<br><br>";
    //    }

}

function GetAPI(props) {
    api();
    return <div>asdas</div>;
}


export default GetAPI;