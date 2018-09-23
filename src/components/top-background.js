import styled from 'styled-components'

export default styled.div`
  position: relative;
  background: linear-gradient(320deg, #0984e3, #6dd5ed);
  height: 300px;
  width: 100%;
  transform: skewY(-8deg);
  transform-origin: 0;
  line-height: 1.45em;
  z-index: 5;
  box-shadow: var(--section-shadow);

  .text {
    position: absolute;
    bottom: -5px;
    left: calc(50vw);
    color: white;
    font-family: 'Lato';
    transform: skewY(8deg) rotate(-8deg);

    .name {
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 2px;
      font-size: 40px;
    }

    .neko-box {
      color: rgba(255, 255, 255, 0.8);
      position: absolute;
      right: calc(4vw - 20px);
      bottom: -90px;
      display: flex;
      font-size: 14px;
      transform: rotate(-5deg);

      @media (max-width: 800px) {
        right: 0;
        bottom: -70px;
      }

      .neko {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-right: 10px;
        transform: rotate(13deg);
        object-fit: cover;

        @media (max-width: 800px) {
          right: calc(20px);
          width: 60px;
          height: 60px;
        }
      }

      .neko-text {
        border-bottom: solid 2px var(--colors-white);
        height: 100%;
        padding-bottom: 0.5em;
      }
    }

    @media (max-width: 800px) {
      left: calc(90vw - 300px);
      bottom: 2px;

      .name {
        display: block;
        font-size: 34px;
      }
    }
  }
`
