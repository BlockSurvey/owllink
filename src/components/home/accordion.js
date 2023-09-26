import { useState } from 'react';
import { Constants } from '../../../common/constants';
import styles from '../../styles/Accordion.module.css';

function Accordion() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  // Get faq's from constant.js
  const faq = Constants.FAQ;

  return (
    <div>
      <div className={styles.accordion}>
        {faq.map((item, i) => (
          <div className={styles.items} key={item.question}>
            <div className={styles.faq_question} onClick={() => toggle(i)}>
              <p style={{ margin: 0 }}>{item.question}</p>
              <span>
                {selected == i ? (
                  <svg
                    width="18"
                    height="10"
                    viewBox="0 0 18 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L9 1L17 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="18"
                    height="10"
                    viewBox="0 0 18 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L9 9L17 1"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
            </div>
            <div
              className={
                selected == i ? styles.faq_answer_show : styles.faq_answer
              }
            >
              <div className={styles.faq_answer_content}>
                <span dangerouslySetInnerHTML={{ __html: item.answer }}></span>
              </div>
            </div>
            <hr style={{ backgroundColor: 'white', margin: 0 }}></hr>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
