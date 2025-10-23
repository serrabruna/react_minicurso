import Local from '../local/Local'
import './Lista.css'

//Utilizar local component
//Tipo Item = Definir tipo dos itens da lista
type Item = {
  slug: string //identifcador unico do item
  nome: string //nome do local
  descricao: string //descricao do local
}

//Array de itens (poderia vir de uma API ou banco de dados)
const itens: Item[] = [
  { slug: 'alemanha', nome: 'Alemanha', descricao: 'Imagem da alemanha' },
  { slug: 'amazonia', nome: 'Amazônia', descricao: 'Imagem da Amazônia' },
  { slug: 'argentina', nome: 'Argentina' , descricao: 'Imagem da Argentina' },
  { slug: 'australia', nome: 'Austrália' , descricao: 'Imagem da Austrália' },
  { slug: 'canada', nome: 'Canadá' , descricao: 'Imagem do Canadá' },
  { slug: 'chile', nome: 'Chile' , descricao: 'Imagem do chile' },
  { slug: 'china', nome: 'China' , descricao: 'Imagem da China' },
  { slug: 'egito', nome: 'Egito' , descricao: 'Imagem do Egito' },
  { slug: 'espanha', nome: 'Espanha' , descricao: 'Imagem da Espanha' },
  { slug: 'eua', nome: 'EUA' , descricao: 'Imagem do EUA' },
  { slug: 'franca', nome: 'França' , descricao: 'Imagem da França' },
  { slug: 'inglaterra', nome: 'Inglaterra' , descricao: 'Imagem da Inglaterra' },
  { slug: 'italia', nome: 'Itália' , descricao: 'Imagem da Itália' },
  { slug: 'japao', nome: 'Japão' , descricao: 'Imagem do Japão' },
  { slug: 'mexico', nome: 'México' , descricao: 'Imagem do México' },
  { slug: 'rio', nome: 'Rio' , descricao: 'Imagem do Rio' },
  { slug: 'russia', nome: 'Rússia' , descricao: 'Imagem da Rússia' },
  { slug: 'suica', nome: 'Suíça' , descricao: 'Imagem da Suíça' },
  // menos itens para simplificar e economixar tempo
]

type ListaProps = {
  slug: string // array de slugs (ex: ['alemanha', 'brasil'])
}

function Lista({ slug }: ListaProps) {
  const termoBusca = slug.toLowerCase().trim() //normaliza o termo de busca: minusculo e sem espaçoes extras
  const itensFiltrados = itens.filter(item =>
    item.nome.toLowerCase().includes(termoBusca)
  ) //filtra os itens cujo nome inclui o termo de busca
  return (
    <div className="lista-locais">
      {itensFiltrados
      .map((item) => {
        const imagem = new URL(`../../assets/fotos/${item.slug}.jpg`, import.meta.url).href //carrega a imagem dinamicamente com base no slug
        return <Local key={item.slug} nome={item.nome} imagem={imagem} descricao={item.descricao}/> //renderiza o componente local para cada item filtrado
      })} 
    </div>
  )
}

export default Lista
//Componente de lista exibe locais filtrados com base no slug fornecido via props
//Usa o componente Local para renderizar cada local na lista
//Filtragem é feita convertendo o nome do local e o termo de busca para minúsculas e verificando se o nome inclui o termo de busca
//Usa URL dinâmica para carregar imagens com base no slug do item
