import './Local.css'

type LocalProps = {
  nome: string
  imagem: string
  href?: string
  descricao: string
}

function Local({ nome, imagem, href = '#', descricao }: LocalProps) {
  return (
    <div className="local">
      <img src={imagem} alt={`Foto ${nome}`} />
      <p>
        <a href={href}>{nome}</a>
        <p>{descricao}</p>
      </p>
    </div>
  )
}

export default Local;
