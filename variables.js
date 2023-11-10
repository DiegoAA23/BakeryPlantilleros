const workers = [
    {titulo: "Chief Baker", url:"https://picsum.photos/id/646/320/320", alt: "bakery"},
    {titulo: "Queen Baker", url:"https://picsum.photos/id/821/320/320", alt: "bakery"},
    {titulo: "Prince Baker", url:"https://picsum.photos/id/996/320/320", alt: "bakery"},
]

const parrafos = [
    {texto:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est necessitatibus dignissimos cum porro animimaiores laboriosam voluptatibus iste. Perspiciatis officia libero fuga, aut ex facilis ad voluptatesesse a! Accusamus!"},
    {texto:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est necessitatibus dignissimos cum porro animimaiores laboriosam voluptatibus iste. Perspiciatis officia libero fuga, aut ex facilis ad voluptatesesse a! Accusamus!"},
]

const paginasfooter = [
    {texto: "Home"},
    {texto: "Products"},
    {texto: "About Us"},
    {texto: "Contact Us"},
]

const numeros = [
    {num: "+1 234 567 890"},
    {num: "+1 234 567 890"},
]

const handlerBarsContext = {
    "/index.html": {
        "title": "Bakery Landing Page",
        "workers": workers,
        "parrafos": parrafos,
        "paginas": paginasfooter,
        "numeros": numeros
    }
}

const pageContext = (page)=>{
    const context= {...handlerBarsContext[page]}
    return context;
}
export default pageContext;