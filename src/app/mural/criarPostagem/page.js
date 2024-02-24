import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import criarPostagem from "@/components/Mural/CriarNovaPostagem/index";

export default function criarPostagemPage(){
    return (
        <div>
            <Header/>
            <criarPostagem/>
            <Footer/>
        </div>
    )
}
