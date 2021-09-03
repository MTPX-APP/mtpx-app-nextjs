import { Panel } from 'primereact/panel';
import FaqLayout from '../components/layouts/faq';
import styles from "../styles/components/faqPanel.module.scss";

const Faq = () => {
  return (
    <>
        <Panel header="How do I sell my work using MintedPix?" toggleable collapsed={false} className={styles.toggleSection}>
            {`<p>You will be guided through a whole minting process, please follow the step, it is super easy!</p>`}
        </Panel>
        <Panel header="What kinds of artwork are accepted at MintedPix?" toggleable collapsed={true} className={styles.toggleSection}>
            {`
              <p>
              Currently we accpet various types of digital image art. Soon we'll be opened up to movie, music etc.
              </p>
            `}
        </Panel>
        <Panel header="What is a creator royalty and how does it work?" toggleable collapsed={true} className={styles.toggleSection}>
            {`<p>A creator is allowed to set a royalty rate as you like. This is going to be redeemed each time your art is traded from the second purchase on.</p>`}
        </Panel> 
    </>
  );
}

Faq.Layout = FaqLayout;
export default Faq;
