$(document).ready(function () {
    console.log("DOM pronto")

    const produtos = [
        {
            nome: "Fonte ATX, PS-200V3",
            descricao: "Sem cabo, marca C3Tech, 200w",
            preco: "R$70,00",
            imagem: "imagens/fonte1.jpg"
        },
        {
            nome: "Fonte ATX, PS-200V4",
            descricao: "Sem cabo, marca C3Tech, 200w",
            preco: "R$60,00",
            imagem: "imagens/fonte2.jpg"
        },
        {
            nome: "Fonte Gamemax GM500",
            descricao: "Potência: 500W. 80 Plus Bronze",
            preco: "R$400,00",
            imagem: "imagens/fonte3.png"
        },
        {
            nome: "Fonte K-Mex - PX300CNG",
            descricao: "200W, Com Cabo",
            preco: "R$200,00",
            imagem: "imagens/fonte4.jpg"
        },
        {
            nome: "Fonte K-mex PK-550ESG",
            descricao: "PCWELLS 500W",
            preco: "R$70,00",
            imagem: "imagens/fonte5.jpg"
        },
        {
            nome: "Fonte Maxprint Rop 200w",
            descricao: "C/ Cabo - Prata",
            preco: "R$90,00",
            imagem: "imagens/fonte6.PNG"
        },
        {
            nome: "Fonte Maxprint Rop ATXt",
            descricao: "230W",
            preco: "R$150,00",
            imagem: "imagens/fonte7.png"
        },
        {
            nome: "Fonte MP600W3-I",
            descricao: "ONE POWER, 600W, Preto, ATX",
            preco: "R$280,00",
            imagem: "imagens/fonte8.jpg"
        },
        {
            nome: "Teclado Gamer USB, TC201",
            descricao: "Teclado Gamer USB, TC201",
            preco: "R$70,00",
            imagem: "imagens/teclado1.jpg"
        },
        {
            nome: "Teclado Gamer USB, TC160",
            descricao: "Teclas vermelhas, Multilaser",
            preco: "R$70,00",
            imagem: "imagens/teclado2.jpg"
        },
        {
            nome: "Teclado USB KB-15BK C3Tech",
            descricao: "Preto",
            preco: "R$40,00",
            imagem: "imagens/teclado3.jpg"
        },
        {
            nome: "Teclado K270920-004427",
            descricao: "Sem fio, Logitech - Preto, ABNT2",
            preco: "R$160,00",
            imagem: "imagens/teclado4.png"
        },
        {
            nome: "Teclado BLACKFIRE NEW",
            descricao: "Gamer - Fortrek, Preto",
            preco: "R$190,00",
            imagem: "imagens/teclado5.jpg"
        },
        {
            nome: "Teclado Mini Slim TC154",
            descricao: "USB Multilaser, Preto",
            preco: "R$90,00",
            imagem: "imagens/teclado6.jpg"
        },
        {
            nome: "Teclado K120 USB Logitech",
            descricao: "Preto",
            preco: "R$65,00",
            imagem: "imagens/teclado7.jpg"
        },
        {
            nome: "Teclado Mecânico Redragon",
            descricao: "RGB switch Preto K552W-RGB",
            preco: "R$250,00",
            imagem: "imagens/teclado8.jpg"
        },
        {
            nome: "Kit Logitech MK120",
            descricao: "Mouse e Teclado com fio",
            preco: "R$129,90",
            imagem: "imagens/kitmouseteclado.jpeg"
        },
        {
            nome: "Kit Gamer Wireless",
            descricao: "Teclado e Mouse Evolut",
            preco: "R$309,00",
            imagem: "imagens/kitmouseteclado2.jpg"
        },
        {
            nome: "Cadeira Gamer Alpha Gamer",
            descricao: "Cygnus RGB, Agcygnus",
            preco: "R$799,99",
            imagem: "imagens/cadeiragamer.jpg"
        },
        {
            nome: "Cadeira Gamer Mad RacerG",
            descricao: "V8 Turbo, PCYes",
            preco: "R$1.800,00",
            imagem: "imagens/cadeiragamer2.jpeg"
        },
        {
            nome: "Mousepad RGB V1406",
            descricao: "Gamer - (365x265mm)",
            preco: "R$159,90",
            imagem: "imagens/mousepad.png"
        },
        {
            nome: "Mousepad Special Colorido",
            descricao: "Multilaser",
            preco: "R$32,90",
            imagem: "imagens/mousepad2.jpeg"
        },
        {
            nome: "Notebook IdeaPad - Lenovo",
            descricao: "3i i3-1115G4 4GB 256GB SSD",
            preco: "R$2.299,00",
            imagem: "imagens/notebook.jpg"
        },
        {
            nome: "Notebook Core - Dell",
            descricao: "i5-1135G7 8GB 256GB SSD",
            preco: "R$3.099,00",
            imagem: "imagens/notebook2.png"
        },
        {
            nome: "Kit Teclado e Mouse MK120",
            descricao: "Multilaser, com fio, RGB, 32000 dpi",
            preco: "R$129,90",
            imagem: "imagens/teclado.jpg"
        },
        {
            nome: "PC Gamer Completo",
            descricao: "Intel I5, Geforce RTX 3050 8GB",
            preco: "R$2500,00",
            imagem: "imagens/pc.jpg"
        },
        {
            nome: "Roteador TP-Link, Wireless",
            descricao: "Dual Band, AC1200 Archer C50W",
            preco: "R$180,00",
            imagem: "imagens/roteador.jpg"
        },
        {
            nome: "Fone de Ouvido JBL",
            descricao: "Bluetooth, Wave 200, PretoD",
            preco: "R$200,00",
            imagem: "imagens/fone.jpeg"
        }
    ]

    const ver_prod = [
        {
            nome: "Kit Logitech MK120",
            descricao: "Mouse e Teclado com fio",
            preco: "R$129,90",
            imagem: "imagens/kitmouseteclado.jpeg"
        },
        {
            nome: "Kit Gamer Wireless",
            descricao: "Teclado e Mouse Evolut",
            preco: "R$309,00",
            imagem: "imagens/kitmouseteclado2.jpg"
        },
        {
            nome: "Cadeira Gamer Alpha Gamer",
            descricao: "Cygnus RGB, Agcygnus",
            preco: "R$799,99",
            imagem: "imagens/cadeiragamer.jpg"
        },
        {
            nome: "Cadeira Gamer Mad RacerG",
            descricao: "V8 Turbo, PCYes",
            preco: "R$1.800,00",
            imagem: "imagens/cadeiragamer2.jpeg"
        },
        {
            nome: "Mousepad RGB V1406",
            descricao: "Gamer - (365x265mm)",
            preco: "R$159,90",
            imagem: "imagens/mousepad.png"
        },
        {
            nome: "Mousepad Special Colorido",
            descricao: "Multilaser",
            preco: "R$32,90",
            imagem: "imagens/mousepad2.jpeg"
        },
        {
            nome: "Notebook IdeaPad - Lenovo",
            descricao: "3i i3-1115G4 4GB 256GB SSD",
            preco: "R$2.299,00",
            imagem: "imagens/notebook.jpg"
        },
        {
            nome: "Notebook Core - Dell",
            descricao: "i5-1135G7 8GB 256GB SSD",
            preco: "R$3.099,00",
            imagem: "imagens/notebook2.png"
        }
    ]

    $("#botaob").click(function () {
        $(".col-md-3").remove()
        let resultado_pesquisa = buscaProduto($("#busca").val())
        console.log(resultado_pesquisa)
        carregarProdutos(resultado_pesquisa)
    })

    function buscaProduto(produto) {
        produto = produto.toLowerCase()
        let retorno = []
        for (let i = 0; i < produtos.length; i++) {
            let nome_busca = produtos[i].nome.toLowerCase()
            let descricao_busca = produtos[i].descricao.toLowerCase()
            if (nome_busca.includes(produto) || descricao_busca.includes(produto)) {
                retorno.push(produtos[i])
            }
        }
        return retorno
    }

    function carregarProdutos(resultado_pesquisa) {
        for (i = 0; i < resultado_pesquisa.length; i++) {
            if (i < 4) {
                let html =
                    `<div class="col-md-3">
                    <div class="card">
                        <div class="ratio ratio-16x9">
                            <img src="${resultado_pesquisa[i].imagem}" class="card-img-top" alt="">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${resultado_pesquisa[i].nome}</h5>
                            <p class="card-text">${resultado_pesquisa[i].descricao}</p>
                            <h5 class="valor">${resultado_pesquisa[i].preco}</h5>
                        </div>
                    </div>
                </div>`
                $("#linha1").append(html)
            }
            else {
                let html =
                    `<div class="col-md-3">
                    <div class="card">
                        <div class="ratio ratio-16x9">
                            <img src="${resultado_pesquisa[i].imagem}" class="card-img-top" alt="">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${resultado_pesquisa[i].nome}</h5>
                            <p class="card-text">${resultado_pesquisa[i].descricao}</p>
                            <h5 class="valor">${resultado_pesquisa[i].preco}</h5>
                        </div>
                    </div>
                </div>`
                $("#linha2").append(html)
            }
        }
    }

    $("#limpar_fonte").click(function () {
        $("#busca").val("")
        $(".col-md-3").remove()
        let fonte = "fonte"
        let resultado_fontes = iniciar_fonte(fonte)
        carregarProdutos(resultado_fontes)
    })

    function iniciar_fonte(fonte) {
        let retorno = []
        for (let i = 0; i < produtos.length; i++) {
            let nome_busca = produtos[i].nome.toLowerCase()
            if (nome_busca.includes(fonte)) {
                retorno.push(produtos[i])
            }
        }
        return retorno
    }

    $("#limpar_teclado").click(function () {
        $("#busca").val("")
        $(".col-md-3").remove()
        let teclado = "teclado"
        let resultado_teclado = iniciar_teclado(teclado)
        carregarProdutos(resultado_teclado)
    })

    function iniciar_teclado(teclado) {
        let retorno = []
        for (let i = 0; i < produtos.length; i++) {
            let nome_busca = produtos[i].nome.toLowerCase()
            if (nome_busca.includes(teclado)) {
                retorno.push(produtos[i])
            }
        }
        return retorno
    }

    $("#limpar_prod").click(function () {
        $("#busca").val("")
        $(".col-md-3").remove()
        carregar()
    })

    function carregar() {
        for (i = 0; i < ver_prod.length; i++) {
            if (i < 4) {
                let html =
                    `<div class="col-md-3">
                    <div class="card">
                        <div class="ratio ratio-16x9">
                            <img src="${ver_prod[i].imagem}" class="card-img-top" alt="">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${ver_prod[i].nome}</h5>
                            <p class="card-text">${ver_prod[i].descricao}</p>
                            <h5 class="valor">${ver_prod[i].preco}</h5>
                        </div>
                    </div>
                </div>`
                $("#linha1").append(html)
            }
            else {
                let html =
                    `<div class="col-md-3">
                    <div class="card">
                        <div class="ratio ratio-16x9">
                            <img src="${ver_prod[i].imagem}" class="card-img-top" alt="">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${ver_prod[i].nome}</h5>
                            <p class="card-text">${ver_prod[i].descricao}</p>
                            <h5 class="valor">${ver_prod[i].preco}</h5>
                        </div>
                    </div>
                </div>`
                $("#linha2").append(html)
            }
        }
    }

})
