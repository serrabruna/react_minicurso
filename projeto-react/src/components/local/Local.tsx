import './Local.css'

//importar em lista, importante colocar descricao para acessibilidade
type LocalProps = {
  nome: string
  imagem: string
  href?: string
  descricao: string
}

//Componente funcional local que recebe props(Propriedades)
//href é opcional, se não for fornecido, usa # como valor padrão, # significa que o link não leva a lugar nenhum
//Alterar alt para incluir descricao
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
//Componente reutilizável para exibir informações de um local com imagem, nome e descrição
