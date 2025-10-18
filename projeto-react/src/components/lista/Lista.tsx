import Local from '../local/Local'
import './Lista.css'

type Item = {
  slug: string
  nome: string
  descricao: string
}

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
]

function Lista() {
  return (
    <div className="lista-locais">
      {itens.map((item) => {
        const imagem = new URL(`../../assets/fotos/${item.slug}.jfif`, import.meta.url).href
        return <Local key={item.slug} nome={item.nome} imagem={imagem} descricao={item.descricao}/>
      })}
    </div>
  )
}

export default Lista
