import './Local.css'

type LocalProps = {
  nome: string
  imagem: string
  href?: string
  descricao: string
}

function Local({ nome, imagem, href = '#', descricao }: LocalProps) {
  return (
    <div className="local-card">
      <img src={imagem} alt={`Foto ${nome}`}  className='local-imagem'/>
      
      <div className="local-conteudo">
        <p>
          <a href={href}>{nome}</a>
          <p>{descricao}</p>
        </p>
      </div>
    </div>
  )
}

export default Local;
