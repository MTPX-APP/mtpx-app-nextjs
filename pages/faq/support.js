import { Panel } from 'primereact/panel';
import FaqLayout from '../../components/layouts/faq';
import styles from "../../styles/components/faqPanel.module.scss";

const Support = () => {
  return (
    <>
        <Panel header="How do we contact MintedPix if I encounter any transactional problem?" toggleable collapsed={false} className={styles.toggleSection}>
            {`<p>Please Contact Support for any issues you encounter. We'll be glad to assist you.</p>`}
        </Panel>
        <Panel header="How much is Gas fee at MintedPix?" toggleable collapsed={true} className={styles.toggleSection}>
            {`<p>It varies from day to day so we can't tell you prior, but you'll see the fee before you mint so please make sure you check the rate!</p>`}
        </Panel>
        <Panel header="Can I contact you in a language other than English?" toggleable collapsed={true} className={styles.toggleSection}>
            {`<p>So far we offer support in Japanese （日本語）, but hopefully we can offer other languages in the near future.</p>`}
        </Panel> 
    </>
  );
}
Support.Layout = FaqLayout;
export default Support;
