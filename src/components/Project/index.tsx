import * as S from './styles'
import Carousel from 'react-elastic-carousel'

function Project() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 870, itemsToShow: 2 },
    { width: 1600, itemsToShow: 3 },
    { width: 3000, itemsToShow: 4 }
  ]

  return (
    <S.Project id="projetos">
      <S.ProjectTitle>Projetos</S.ProjectTitle>

      <S.ProjectComponents>
        <Carousel isRTL={false} breakPoints={breakPoints}>
          <S.TimerProject>
            <S.Projects>
              <S.NameProject>timer</S.NameProject>
              <S.ImgProject
                src="/img/img-project/timer-project.png"
                alt="img do projeto"
              />

              <S.TextProject>
                Criação de um cronômetro para atividades, registros de
                históricos de atividades e históricos armazenados anteriormente.
              </S.TextProject>

              <S.AcessProject
                href="https://github.com/allesoares95/ignite-timer/"
                target="_blank"
              >
                acessar
              </S.AcessProject>
            </S.Projects>
          </S.TimerProject>

          <S.TwtProject>
            <S.Projects>
              <S.NameProject>twt</S.NameProject>
              <S.ImgProject
                src="/img/img-project/twt-project.png"
                alt="img do projeto"
              />

              <S.TextProject>
                Um clone do twt, nesse projeto você podera tweetar e comentar em
                tweets existentes.
              </S.TextProject>
              <S.AcessProject
                href="https://github.com/allesoares95/project-twt/"
                target="_blank"
              >
                acessar
              </S.AcessProject>
            </S.Projects>
          </S.TwtProject>

          <S.DtMoneyProject>
            <S.Projects>
              <S.NameProject>dt-money</S.NameProject>
              <S.ImgProject
                src="/img/img-project/dt-money-project.png"
                alt="img do projeto"
              />

              <S.TextProject>
                criado para uso pessoal, para administrar suas finanças
                pessoais, você podera adicionar entradas e saídas e nomear do
                jeito que preferir.
              </S.TextProject>
              <S.AcessProject
                href="https://github.com/allesoares95/dt-money/"
                target="_blank"
              >
                acessar
              </S.AcessProject>
            </S.Projects>
          </S.DtMoneyProject>

          <S.HabitsProject>
            <S.Projects>
              <S.NameProject>habits</S.NameProject>
              <S.ImgProject
                src="/img/img-project/habits-project.png"
                alt="img do projeto"
              />
              <S.TextProject>
                Projeto criado para ajudar a mapear seus hábitos e anotações
                diárias de tarefas diárias concluídas ou inacabadas. web -
                mobile
              </S.TextProject>
              <S.AcessProject
                href="https://github.com/allesoares95/nlw-setup/"
                target="_blank"
              >
                acessar
              </S.AcessProject>
            </S.Projects>
          </S.HabitsProject>

          <S.StreamersProject>
            <S.Projects>
              <S.NameProject>streamers</S.NameProject>
              <S.ImgProject
                src="/img/img-project/streamers-project.png"
                alt="img do projeto"
              />

              <S.TextProject>
                Rede social particular mostrando meus jogos favoritos e canais
                de streamers que assisto.
              </S.TextProject>

              <S.AcessProject
                href="https://github.com/allesoares95/projeto-nlw/"
                target="_blank"
              >
                acessar
              </S.AcessProject>
            </S.Projects>
          </S.StreamersProject>

          <S.BarberProject>
            <S.Projects>
              <S.NameProject>barber</S.NameProject>
              <S.ImgProject
                src="/img/img-project/barber-project.png"
                alt="img do projeto"
              />
              <S.TextProject>
                Site de um e-commerce de Barbearia, onde o cliente pode acessar
                o site e conhecer um pouco sobre o comércio.
              </S.TextProject>

              <S.AcessProject
                href="https://github.com/allesoares95/projeto-alura-barbearia/"
                target="_blank"
              >
                acessar
              </S.AcessProject>
            </S.Projects>
          </S.BarberProject>
        </Carousel>
      </S.ProjectComponents>
    </S.Project>
  )
}

export default Project
