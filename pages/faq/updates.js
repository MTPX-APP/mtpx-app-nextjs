import { Panel } from 'primereact/panel';
import FaqLayout from '../../components/layouts/faq';
import styles from "../../styles/components/faqPanel.module.scss";

const Updates = () => {
  return (
    <>
        <Panel header="October 2021 Release v1.0" toggleable collapsed={false} className={styles.toggleSection}>
            <p>
              This release includes fixes and updates to content.
            </p>
        </Panel>        
    </>
  );
}
Updates.Layout = FaqLayout;
export default Updates;
