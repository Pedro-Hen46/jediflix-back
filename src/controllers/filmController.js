const films = [
    {
        id: 1,
        name: "Gemini: O planeta sombrio",
        overview: "Em um futuro próximo... Após séculos de peregrinação ambiental, os dias da Terra estão contados. Com ela, a espécie humana está ameaçada de extinção. Mas a esperança renasce quando um jovem cientista revela um processo revolucionário de terraformação, que abre caminho para a colonização de novos planetas. Um grupo de elite de todos os matizes e de todas as nacionalidades é formado. Sua missão: assumir o comando da nau capitânia da frota internacional e partir em busca de um novo lar para a humanidade. Navegando rumo ao desconhecido, esses novos exploradores estão longe de imaginar os imensos perigos que os aguardam.",
        frontCover: "https://br.web.img2.acsta.net/c_310_420/pictures/23/01/04/17/26/0928174.jpg",
        headerImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5Vp4VE2-vh80bjk5n9e5k_1MWT3jOG9OHnonjGuGmoRg3UFyCB9arQpCJKaHU94CmypzyGdcDhbRLZbmxwqjKBitz4WqzOJUoyIrnP-Mn8BcUqf_FpAx0w7hlyBsduWcqIgywMl0WPmKPDLP6qd_-nTya1QVcbi25o9iaFSht6k6ihd7o0BqyTtdkrQ/w640-h330/Gemini-O-Planeta-Sombrio_Condor-Distribution%20(6).JPG",
        price: 25.00,
        category: "Ficção Cientifica, Horror",
        productedAt: "2022",
        duration: "1:58",
        ageClassification: 14
    },
    {
        id: 2,
        name: "Avatar 2: O caminho da agua",
        overview: "Em Avatar: O Caminho da Água, sequência de Avatar (2009), após dez anos da primeira batalha de Pandora entre os Na'vi e os humanos, Jake Sully (Sam Worthington) vive pacificamente com sua família e sua tribo. Ele e Ney'tiri formaram uma família e estão fazendo de tudo para ficarem juntos, devido a problemas conjugais e papéis que cada um tem que exercer dentro da tribo. No entanto, eles devem sair de casa e explorar as regiões de Pandora, indo para o mar e fazendo pactos com outros Na'vi da região. Quando uma antiga ameaça ressurge, Jake deve travar uma guerra difícil contra os humanos novamente. Mesmo com dificuldade, Jake acaba fazendo novos aliados - alguns dos quais já vivem entre os Na'vi e outros com novos avatares. Mesmo com uma guerra em curso, Jake e Ney'tiri terão que fazer de tudo para ficarem juntos e cuidar da família e de sua tribo.",
        frontCover: "https://br.web.img2.acsta.net/c_310_420/pictures/22/05/09/16/16/3197518.jpg",
        headerImage: "https://veja.abril.com.br/wp-content/uploads/2022/12/FILME-AVATAR-2-O-CAMINHO-DA-AGUA-2022-016.jpg.jpg?quality=70&strip=info&w=1280&h=720&crop=1",
        price: 30.00,
        category: "Ficção Cientifica, Fantasia",
        productedAt: "2022",
        duration: "3:12",
        ageClassification: 12
    },
    {
        id: 3,
        name: "GATO DE BOTAS 2: O ÚLTIMO PEDIDO",
        overview: "Em Gato de Botas 2: O Último Pedido, O Gato de Botas descobre que sua paixão pela aventura cobrou seu preço: por conta de seu gosto pelo perigo e pelo desrespeito à segurança pessoal, ele queimou oito de suas nove vidas. Com apenas uma vida restante, o Gato precisa pedir ajuda para uma antiga parceira - que atualmente é sua rival e inimiga mortal, Kitty Pata Mansa - para continuar vivo. Então, o destemido bichano parte em uma jornada épica pela Floresta Negra para encontrar a mítica Estrela dos Desejos, capaz de proporcionar o legendário Último Desejo e restaurar suas nove vidas.",
        frontCover: "https://br.web.img2.acsta.net/c_310_420/pictures/22/12/27/14/37/5994557.jpg",
        headerImage: "https://s2.glbimg.com/1SMeCXTtxiqZw8UgCJs42TTxp58=/0x0:1920x1080/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/j/q/961HATTrqmPLpPlnLEYQ/gato-de-botas-2-o-ultimo-pedido.jpg",
        price: 20.00,
        category: "Ação, Comédia, Aventura",
        productedAt: "2023",
        duration: "1:42",
        ageClassification: 0
    },
    
]

export async function allFilmsList(req, res){
    res.json(films)
}