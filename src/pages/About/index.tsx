import Heading from '../../components/Heading';
import Block from '../../components/Block';
import styles from './index.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      {/* Main heading */}
      <Heading
        variant="bold40"
        level="h1"
        className={styles.mainTitle}
      >
        À propos de nous
      </Heading>

      {/* Subtitle */}
      <Heading
        variant="normal18"
        level="p"
        className={styles.subtitle}
      >
        Découvrez qui nous sommes, ce qui nous anime et comment nous travaillons pour<br/>
        transformer vos idées en expériences mémorables.
      </Heading>

        {/* Content blocks */}
        <Block className={styles.block1}>
          {/* Content for block 1 */}
        </Block>

        <Block className={styles.block2}>
          {/* Content for block 2 */}
        </Block>

        <Block className={styles.block3}>
          {/* Content for block 3 */}
        </Block>

        <Block className={styles.block4}>
          {/* Content for block 4 */}
        </Block>

      {/* Main content area (left side) */}
      <div className={styles.contentArea}>
        <Heading variant="bold40" level="h1" className={styles.contentTitle}>
          Notre histoire
        </Heading>
        <Heading variant="normal18" level="p" className={styles.contentText}>
            <p>
              Solux Vision Media est une agence créative et technologique, née de la<br/>
              conviction que chaque idée mérite d'être mise en lumière. Notre société est<br/>
              officiellement enregistrée en République Démocratique du Congo, avec un<br/>
              siège opérationnel à Helsinki. 
            </p>
            <p>
              Nous bénéficions d'une équipe répartie entre la Russie, la Pologne, le Gabon et<br/>
              la RDC, ce qui enrichit notre approche par des perspectives multiculturelles et <br/>
              une grande flexibilité. 
            </p>
             <p>
                Ancrés par la conviction que chaque idée mérite d'être mise en lumière, nous<br/>
                allions créativité, innovation technologique et rigueur stratégique pour renforcer<br/>
                la notoriété, l'engagement et la croissance durable de nos clients.
             </p>
        </Heading>

      </div>
    </div>
  );
};

export default AboutPage;