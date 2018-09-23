import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Bar from '../components/hello-bar'
import TopBg from '../components/top-background'
import Icon from '../components/icon'

import pepiteImg from '../images/pepite.jpg'
import youcomImg from '../images/youcom.jpg'
import Layout from '../components/layout'

const SkewedBackground = styled.div`
  width: 100%;
  transform: skewY(-8deg);
  transform-origin: 0;
  /* background: linear-gradient(to right, #00b4db, #0083b0); */
  box-shadow: var(--section-shadow);
  margin-top: -1px;
  padding-left: 15vw;
  z-index: calc(var(--section-numbers) - var(--section-number));
  overflow: hidden;

  > :first-child {
    transform: skewY(8deg);
    padding-top: 8vw;
    padding-bottom: 4vw;
  }

  @media (max-width: 800px) {
    padding-left: 4vw;
    padding-right: 4vw;

    > :first-child {
      padding-top: 80px;
      padding-bottom: 40px;
    }
  }
`

const Intro = styled(SkewedBackground)`
  --section-number: 1;
  --font-family: 'Source Sans Pro', system-ui, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  overflow: hidden;
  background: linear-gradient(var(--gradient-direction), #2c3e50, #3498db);
  color: var(--colors-font-white);
  text-align: justify;
  font-family: var(--font-family);
  font-weight: 600;

  @media (max-width: 800px) {
    font-size: 16px;
    padding-left: 4vw;
    padding-right: 4vw;
  }
`

const IntroButton = styled.button`
  width: 180px;
  background: transparent;
  border: solid 2px var(--colors-white);
  color: var(--colors-font-white);
  border-radius: 4px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  padding: 10px 15px;
  text-decoration: none;
  transition: background 0.3s ease, color 0.3s ease;

  :disabled {
    border-color: #333;
    color: #333;
  }

  :hover:not(:disabled) {
    background: var(--colors-white);
    color: #24424e;
    cursor: pointer;
  }

  &.soon {
    position: relative;

    &::after {
      content: 'Bientôt !';
      display: block;
      position: absolute;
      top: -4px;
      right: -4px;
      color: var(--colors-font-white);
      font-size: 16px;
      transform: rotate(8deg);
    }
  }
`

const ButtonBlock = styled.div`
  display: flex;
  gap: 10px;
  text-align: center;

  @media (max-width: 800px) {
    text-align: center;
    flex-direction: column;
    align-items: center;
  }
`

const SectionTitle = styled.h2`
  font-size: 38px;
  text-align: center;
  max-width: 16em;
  margin: -10px 0 30px;
`

const Paragraph = styled.p`
  max-width: 30em;
`

const SkillsBlock = styled(SkewedBackground)`
  --section-number: 2;
  background: linear-gradient(var(--gradient-direction), #182848, #4b6cb7);
`

const SkillsInner = styled.div`
  display: flex;
  gap: 5vw;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`

const SkillsText = styled.div`
  color: var(--colors-font-white);
  font-size: 18px;
  margin-left: -5vw;
  text-align: justify;

  @media (max-width: 800px) {
    margin-left: 0;
    font-size: 16px;
  }
`

const Where = styled(SkewedBackground)`
  --section-number: 3;
  background: linear-gradient(
    var(--gradient-direction),
    #0f2027,
    #203a43,
    #2c5364
  );
  color: var(--colors-font-white);
  font-size: 20px;
  overflow: hidden;
  height: 40vw;
  padding-left: 0;

  > :first-child {
    padding: 0;
    display: flex;
  }

  @media (max-width: 800px) {
    height: auto;
    padding: 0;

    > :first-child {
      flex-direction: column;
      margin-top: -30px;
    }
  }
`

const WhereImg = styled.img`
  height: 50vw;
  max-width: 40vw;
  object-fit: cover;

  @media (max-width: 800px) {
    height: 300px;
    width: 100%;
    max-width: 100%;
  }
`

const WhereText = styled.div`
  margin: 20px 4vw 0;
  text-align: justify;
  padding-top: 4vw;
  padding-bottom: 2vw;

  ${IntroButton} {
    display: block;
    margin: 30px 0;
    width: 280px;
  }

  @media (max-width: 800px) {
    margin-left: 4vw;
    margin-right: 4vw;
    font-size: 16px;
  }
`

const Contact = styled(SkewedBackground)`
  --section-number: 4;
  background: linear-gradient(var(--gradient-direction), #141e30, #243b55);
  color: var(--colors-font-white);
  font-size: 20px;
  padding-left: 0;
  padding-bottom: 30px;
  text-align: center;

  ${Paragraph}, ${SectionTitle} {
    max-width: 100%;
  }

  > :first-child {
    margin-left: auto;
    margin-right: auto;
  }
`

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');

  :root {
    --colors-white: rgba(255, 255, 255, 0.9);
    --colors-font-white: var(--colors-white);
    --font-family: 'Source Sans Pro', system-ui, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --gradient-direction: 320deg;
    --section-shadow: 0 4px 8px 8px rgba(0, 0, 0, 0.3);
    --section-numbers: 5;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    background: linear-gradient(var(--gradient-direction), #333, #555);
  }

  html, body {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-family: var(--font-family);
  }

  a {
    color: inherit;
  }
`

const Skills = styled.div`
  position: relative;
  background: var(--colors-white);
  padding: 20px;
  width: 32vw;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  transform: rotate(-5deg) !important;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    border-width: 0 24px 24px 0;
    border-style: solid;
    border-color: #fff rgba(0, 0, 0, 0.3);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3), -1px 1px 1px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 800px) {
    width: 90vw;
    margin-top: -40px;
    margin-bottom: 20px;
  }
`

const SkillLayout = styled.div`
  color: ${props => props.color};
  font-weight: 600;

  &:not(:first-child) {
    margin-top: 10px;
  }
`

const ProgressBar = styled.div`
  margin-top: 4px;
  height: 20px;
  width: 30vw;

  @media (max-width: 800px) {
    width: 85vw;
  }
`

const Progress = styled.div`
  width: ${props => props.progress}%;
  background-color: ${props => props.color};
`

const BigLetter = styled.span`
  font-size: 140px;

  @media (max-width: 800px) {
    font-size: inherit;
  }
`

const ExternalLink = props => <a target="_blank" {...props} />

class Skill extends React.Component {
  render() {
    const { name, progress, color, ...props } = this.props

    return (
      <SkillLayout color={color} {...props}>
        {name}
        <ProgressBar>
          <Progress progress={progress} color={color}>
            &nbsp;
          </Progress>
        </ProgressBar>
      </SkillLayout>
    )
  }
}

const IndexPage = () => (
  <Layout>
    <GlobalStyle />
    <TopBg>
      <div className="text">
        Moi c'est{' '}
        <span className="name">
          <BigLetter>M</BigLetter>
          atthieu Harlé
        </span>
        <div className="neko-box">
          <img className="neko" src={pepiteImg} />
          <span className="neko-text">
            Et ça, c'est mon chat :<br /> <strong>Pépite</strong> !
          </span>
        </div>
      </div>
    </TopBg>
    <div
      style={{ position: 'absolute', left: 0, top: 0, lineHeight: '1.45em' }}
    >
      <Bar rotate={-10} pos={10} width={200} fontSize={24}>
        Hello !
      </Bar>
      <Bar rotate={-5} pos={9} width={140} fontSize={16}>
        Je suis
      </Bar>
      <Bar rotate={2} pos={8} width={180} fontSize={20}>
        Développeur
      </Bar>
      <Bar
        rotate={8}
        pos={7}
        width={280}
        fontSize={34}
        style={{
          textTransform: 'uppercase',
          fontWeight: 'bold',
          letterSpacing: '2px',
        }}
      >
        Fullstack
      </Bar>
    </div>
    <Intro>
      <div>
        <Paragraph>
          Je fabrique des sites web et réalisent des applications complètes
          basées sur les dernières technologies du web.
        </Paragraph>
        <Paragraph>
          Je suis en dernière année de Master, mais je me forme depuis
          maintenant 10 ans sur les technologies de l'information et, grâce aux
          stages, contrats d'apprentissage et à l'auto-entreprenariat, j'ai
          aussi 3 ans d'expérience professionnelle.
        </Paragraph>
        <Paragraph>
          La programmation étant une grande passion pour moi, je prends beaucoup
          de soin à concevoir des systèmes simples et puissants en m'efforçant
          de garder les projets que l'on me confie maintenables pour moi et les
          autres.
        </Paragraph>
        <ButtonBlock>
          <IntroButton as="a" href="#contact">
            <Icon icon="envelope" /> Me contacter
          </IntroButton>
          <IntroButton disabled className="soon">
            <Icon icon="terminal" /> Blog
          </IntroButton>
        </ButtonBlock>
      </div>
    </Intro>
    <SkillsBlock>
      <SkillsInner>
        <SkillsText>
          <SectionTitle>Mes Compétences</SectionTitle>
          <Paragraph>
            Je connais un éventail varié de langages, librairies et autres
            outils ce qui me permet de pouvoir m'adapter à différentes
            situations.
          </Paragraph>
          <Paragraph>
            Le JavaScript est un langage pratiquement incontournable aujourd'hui
            et il a beaucoup évolué ces dernières années, à tel point qu'il est
            maintenant possible de réaliser des applications entières dans un
            navigateurs et de profiter des fonctions systèmees de l'appareil
            comme la synchronisation hors-ligne et les notifications, tout celà
            grâce aux{' '}
            <strong>
              <ExternalLink href="https://developer.mozilla.org/fr/docs/Web/Apps/Progressive">
                Progressive Web Applications
              </ExternalLink>
            </strong>
            .<br />
            Et si il est quand même nécessaire d'avoir des applications dites{' '}
            <em>natives</em> celles-ci pourront être réalisées aussi à l'aide de
            JavaScript en passant par des outils tels que{' '}
            <strong>
              <ExternalLink href="https://reactnative.com/">
                React Native
              </ExternalLink>
            </strong>
            .
          </Paragraph>
          <Paragraph>
            Côté backend, je maitrise{' '}
            <strong>
              <ExternalLink href="https://nodejs.org">Node</ExternalLink>
            </strong>{' '}
            qui permet de rapidement créer des applications légère et réactives.
            Je m'efforce aussi d'apprendre{' '}
            <strong>
              <ExternalLink href="https://elixir-lang.org/">
                Elixir
              </ExternalLink>
            </strong>{' '}
            qui est un langage basé sur la <em>programmation fonctionnelle</em>,
            un paradigme efficace que j'ai commencé à apprécier grâce aux
            nouveautés <em>ES6+</em> de JavaScript. Elixir me permettra de
            concevoir des applications plus demandandes, en particulier lorsque
            plusieurs utilisateurs auront besoin d'y accèder en simultané.
          </Paragraph>
          <Paragraph>
            Je me débrouille aussi dans l'administration de systèmes{' '}
            <strong>Linux</strong>, utilisant ce système d'exploitation au jour
            le jour. Néanmoins, je préfère déployer mes applications via{' '}
            <strong>
              <ExternalLink href="https://docker.com">Docker</ExternalLink>
            </strong>
            , allégeant la charge de maintenance et permettant de tirer pleine
            partie de l'
            <strong>intégration continue</strong> <em>(CI)</em> et du{' '}
            <strong>déploiement continu</strong> <em>(CD)</em>.
          </Paragraph>
          <Paragraph>
            Enfin, je possède aussi des connaissances en <strong>PHP</strong> et{' '}
            <strong>Java</strong> qui me permettent d'intervenir sur beaucoup de
            sites ou applications existantes, notamment les CMS tels que{' '}
            <strong>
              <ExternalLink href="https://wordpress.org">
                Wordpress
              </ExternalLink>
            </strong>{' '}
            dans le cas de PHP
          </Paragraph>
        </SkillsText>
        <Skills>
          <Skill progress={75} name="ReactJS" color="#61DAFB" />
          <Skill progress={85} name="NodeJS" color="#669F5B" />
          <Skill progress={60} name="Go" color="#29BDB1" />
          <Skill progress={40} name="Elixir" color="#4e2a8e" />
          <Skill progress={70} name="Linux" color="#FFD133" />
          <Skill progress={90} name="Docker" color="#0091E2" />
          <Skill progress={60} name="Java" color="#F80000" />
          <Skill progress={55} name="PHP" color="#8892BF" />
          <Skill progress={140} name="Boire du café" color="#6F4E37" />
        </Skills>
      </SkillsInner>
    </SkillsBlock>
    <Where>
      <div>
        <WhereImg src={youcomImg} />
        <WhereText>
          <Paragraph>
            En ce moment, je travaille à l'
            <strong>Agence YouCom'</strong> et je ne prendrais pas d'offre en
            freelance pendant ce temps.
          </Paragraph>
          <Paragraph>
            N'hésitez-pas à prendre contact avec l'agence pour tout projet
            numérique, du{' '}
            <strong>
              conseil en webmarketing à la conception de votre site web ou
              application !
            </strong>
          </Paragraph>
          <center>
            <IntroButton as="a" href="https://agence-youcom.com/">
              Site de l'Agence YouCom' <Icon icon="external-link-alt" />
            </IntroButton>
          </center>
          <Paragraph>
            Si vous souhaitez toutefois me contacter personnellement, vous
            pouvez trouver mon adresse email ci-dessous !
          </Paragraph>
        </WhereText>
      </div>
    </Where>
    <Contact id="contact">
      <div style={{ textAlign: 'center' }}>
        <SectionTitle>Contact</SectionTitle>
        <Paragraph>
          <Icon icon="lock" /> PGP:{' '}
          <a href="/publickey.txt">2E78F5C00AB348B2</a>
        </Paragraph>
        <Paragraph>
          <IntroButton as="a" href="mailto:bonjour@matthieuharle.com">
            <Icon icon="envelope" /> bonjour@matthieuharle.com
          </IntroButton>
        </Paragraph>
      </div>
    </Contact>
  </Layout>
)

export default IndexPage
