import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import H3 from '../H3';
import P from '../P';

import { styles } from '../../constants';

const Dapp2 = () => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="120px"
    >
      <H2 center margin="0 0 60px">
        Poseidon Network Dapps
      </H2>
      <Content
        direction="row"
        style="display: grid; grid-template-columns: auto auto auto; grid-gap: 30px 31px; justify-content: space-between;"
        mStyle="grid-template-columns: auto;"
      >
        <div className="block">
          <img src="/static/img-harddisk-green.svg" />
          <H3 color={styles.lightColor} margin="0 0 16px" center>
            QCDN
          </H3>
          <P mStyle="text-align: left;">
            The next-generation decentralized Content Delivery Network (dCDN)
            built by the POSEIDON NETWORK is called QCDN. It includes a traffic
            dispatcher called Qontroller, and QEdge, decentralized nodes from
            all over the world that join our network.
          </P>
        </div>
        <div className="block">
          <img src="/static/img-harddisk-yellow.svg" />
          <H3 color={styles.lightColor} margin="0 0 16px" center>
            DSN
          </H3>
          <P mStyle="text-align: left;">
            Decentralized Storage Network is mostly created by blockchain
            network like IPFS, Filecoin, etc. We combined with these technology
            and company to greater our network.
          </P>
        </div>
        <div className="block">
          <img src="/static/img-harddisk-blue.svg" />
          <H3 color={styles.lightColor} margin="0 0 16px" center>
            Blockchain
          </H3>
          <P mStyle="text-align: left;">
            We create our token on Ethereum, and use Aelf network to create
            mutiple VM by runing nodes parallel. In addition, we cooperate with
            Nem, Harmony, and Cybavo to get the toppest technical advices and
            collaboration.
          </P>
        </div>
      </Content>
      <style jsx>{`
        .block {
          display: flex;
          flex-direction: column;
          min-width: 300px;
          min-height: 525px;
          max-width: 360px;
          background-color: #1d202b;
          padding: 60px 30px 30px;
        }

        img {
          margin-bottom: 35px;
        }

        @media only screen and (max-width: 1024px) {
          .block {
            max-width: 100%;
          }
        }
      `}</style>
    </Section>
  );
};

export default Dapp2;
