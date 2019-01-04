import Layout from '../Layout';
import Content from '../Content';
import ListItem from './ListItem';

const Blockchain = () => (
  <Layout
    bgColor="#d7f2ee"
    color="#222633"
    padding="0"
  >
    <Content>
      <div className="main">
        <div className="left">
          <p className="title">
            Blockchain Integration
          </p>
          <ul className="description">
            <ListItem>atlas, good game.</ListItem>
            <ListItem>TRON smart contract and TRX Wallets</ListItem>
            <ListItem>layer 2 solution, NOT putting data on blockchain to ensure performance, scalability, and feasibility</ListItem>
          </ul>
          <a href="/" className="btn">
            Try it out
          </a>
        </div>
        <div className="right">
          <img src="/static/img-male-1.svg" className="female-2" />
        </div>
      </div>
      <style jsx>{`
        .main {
          height: 100vh;
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
        }

        .title {
          width: 471px;
          height: 156px;
          font-family: Montserrat;
          font-size: 64px;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #222633;
        }

        .description {
          width: 471px;
          height: 96px;
          font-family: Lato;
          font-size: 16px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 2;
          letter-spacing: normal;
          color: #222633;
        }

        .btn {
          margin-top: 58px;
          display: block;
          width: 300px;
          height: 64px;
          border-radius: 40px;
          color: #222633;
          border: 1px solid #222633;
          padding: 17px 88px;
          font-weight: 600;
          font-size: 24px;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        @media only screen and (max-width: 1120px) {
          .main {
            flex-direction: column;
            height: 100%;
          }
        }

        @media only screen and (max-width: 665px) {
          .left {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .title, .description {
            width: 100%;
            text-align: center;
          }

          .title {
            font-size: 46px;
            height: initial;
          }

          .description {
            width: 80%;
            height: initial;
            margin-bottom: 30px;
          }

          img {
            width: 100%;
            margin-bottom: 30px;
          }

          .btn {
            font-size: 20px;
          }
        }
      `}</style>
    </Content>
  </Layout>
);

export default Blockchain;